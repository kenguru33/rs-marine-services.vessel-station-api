-- CreateTable
CREATE TABLE "SubState" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "legacyStateId" INTEGER,
    "inUse" BOOLEAN NOT NULL DEFAULT true,
    "stateId" INTEGER NOT NULL,

    CONSTRAINT "SubState_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SubState_name_key" ON "SubState"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SubState_legacyStateId_key" ON "SubState"("legacyStateId");

-- AddForeignKey
ALTER TABLE "SubState" ADD CONSTRAINT "SubState_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
