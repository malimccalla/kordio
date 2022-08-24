-- CreateTable
CREATE TABLE "companies" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "contact_email" TEXT,
    "location" TEXT,
    "website" TEXT,
    "description" TEXT,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories_on_companies" (
    "company_id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,

    CONSTRAINT "categories_on_companies_pkey" PRIMARY KEY ("company_id","category_id")
);

-- AddForeignKey
ALTER TABLE "categories_on_companies" ADD CONSTRAINT "categories_on_companies_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories_on_companies" ADD CONSTRAINT "categories_on_companies_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
