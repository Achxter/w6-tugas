import { PrismaClient } from '@prisma/client';
import { defineEventHandler, readBody } from 'h3';
import validator from 'validator';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, comment } = body;

  if (!name || !email || !comment) {
    return { error: 'All fields are required.' };
  }

  // Sanitize input
  const sanitizedName = validator.escape(name);
  const sanitizedEmail = validator.normalizeEmail(email);
  const sanitizedComment = validator.escape(comment);

  const newEntry = await prisma.guestbookEntry.create({
    data: {
      name: sanitizedName,
      email: sanitizedEmail,
      comment: sanitizedComment,
    },
  });

  return newEntry;
});
