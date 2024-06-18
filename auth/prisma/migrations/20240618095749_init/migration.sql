/*
  Warnings:

  - You are about to drop the column `birthdate` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `hashedRt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `picture` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `referralCount` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `referrerId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `birthdate`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `hashedRt`,
    DROP COLUMN `lastName`,
    DROP COLUMN `name`,
    DROP COLUMN `phone`,
    DROP COLUMN `picture`,
    DROP COLUMN `referralCount`,
    DROP COLUMN `referrerId`,
    DROP COLUMN `role`;
