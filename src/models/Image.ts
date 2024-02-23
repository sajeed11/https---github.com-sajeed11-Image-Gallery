import { z } from 'zod';

const BasicImageSchema = z.object({
  page: z.number(),
  per_page: z.number(),
  prev_page: z.string().optional(),
  next_page: z.string().optional(),
  total_results: z.number(),
});

const BasicPhotoSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  src: z.object({
    large: z.string(),
  }),
  blurredDataUrl: z.string().optional(),
});

export const ImagesSchemaWithPhtos = BasicImageSchema.extend({
  photos: z.array(BasicPhotoSchema)
})

export type Photo = z.infer<typeof BasicPhotoSchema>;

export type ImagesResults = z.infer<typeof ImagesSchemaWithPhtos>;