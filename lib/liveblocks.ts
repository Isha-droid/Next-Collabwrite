import { Liveblocks } from '@liveblocks/node';

export const liveblocks = new Liveblocks({
  secret: process.env.LIVEDOCS_SECRET_KEY as string,
});