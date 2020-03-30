const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// A `main` function so that we can use async/await
async function main() {
  const product = await prisma.product.create({
    data: {
     name: "TestProduct"
    },
  });
  console.log(product);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.disconnect();
  });