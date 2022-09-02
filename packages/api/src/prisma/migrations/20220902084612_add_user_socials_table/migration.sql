-- CreateTable
CREATE TABLE "user_socials" (
    "user_id" TEXT NOT NULL,
    "social_id" TEXT NOT NULL,
    "provider" TEXT NOT NULL,

    CONSTRAINT "user_socials_pkey" PRIMARY KEY ("user_id","social_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_socials_social_id_key" ON "user_socials"("social_id");

-- AddForeignKey
ALTER TABLE "user_socials" ADD CONSTRAINT "user_socials_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
