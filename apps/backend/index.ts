import { PrismaClient } from '@prisma/client';
import Fastify, { FastifyRequest } from 'fastify';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import cors from '@fastify/cors';
import './env';

const prisma = new PrismaClient();
const fastify = Fastify({
  logger: false,
});
await fastify.register(cors, {
  origin: 'http://localhost:5173',
});

fastify.get(
  '/notes',
  async (request: FastifyRequest<{ Querystring: { userId?: string } }>) => {
    const { userId } = request.query;
    const notes = await prisma.note.findMany({
      where: {
        userId: userId ? Number(userId) : undefined,
      },
    });

    return notes;
  },
);

fastify.get(
  '/notes/:noteId',
  async (
    request: FastifyRequest<{
      Params: { noteId: string };
    }>,
    reply,
  ) => {
    const { noteId } = request.params;

    const note = await prisma.note.findUnique({
      where: {
        id: Number(noteId),
      },
    });

    if (!note) {
      return reply.code(StatusCodes.NOT_FOUND).send({
        error: getReasonPhrase(StatusCodes.NOT_FOUND),
      });
    }

    return note;
  },
);

fastify.post(
  '/notes',
  async (
    request: FastifyRequest<{
      Body: {
        title: string;
        content: string;
      };
      Querystring: {
        userId: string;
      };
    }>,
    reply,
  ) => {
    const { title, content } = request.body;
    const { userId } = request.query;
    const note = await prisma.note.create({
      data: {
        userId: Number(userId),
        title,
        content,
      },
    });

    return reply.code(201).send(note);
  },
);

fastify.patch(
  '/notes/:noteId',
  async (
    request: FastifyRequest<{
      Params: { noteId: string };
      Body: {
        title: string;
        content: string;
      };
    }>,
  ) => {
    const { noteId } = request.params;
    const { title, content } = request.body;

    const note = await prisma.note.update({
      where: {
        id: Number(noteId),
      },
      data: {
        title,
        content,
      },
    });

    return note;
  },
);

fastify.delete(
  '/notes/:noteId',
  async (
    request: FastifyRequest<{
      Params: { noteId: string };
    }>,
    reply,
  ) => {
    const { noteId } = request.params;
    const note = await prisma.note.delete({
      where: {
        id: Number(noteId),
      },
    });

    if (!note) {
      return reply.code(StatusCodes.NOT_FOUND).send({
        error: getReasonPhrase(StatusCodes.NOT_FOUND),
      });
    }

    return reply.code(StatusCodes.NO_CONTENT).send();
  },
);

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
