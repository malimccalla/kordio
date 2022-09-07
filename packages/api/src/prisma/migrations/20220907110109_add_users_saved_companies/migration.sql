-- CreateTable
CREATE TABLE "users_saved_companies" (
    "company_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "savedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_saved_companies_pkey" PRIMARY KEY ("company_id","user_id")
);

-- AddForeignKey
ALTER TABLE "users_saved_companies" ADD CONSTRAINT "users_saved_companies_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_saved_companies" ADD CONSTRAINT "users_saved_companies_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
