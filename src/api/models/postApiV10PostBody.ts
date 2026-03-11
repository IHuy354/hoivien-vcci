/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import type { PostMutate } from './postMutate';
import type { PostApiV10PostBodyAllOf } from './postApiV10PostBodyAllOf';

export type PostApiV10PostBody = PostMutate & PostApiV10PostBodyAllOf;
