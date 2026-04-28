import { PrismaClient, ProductStatus, Role } from '@prisma/client';
import { hashPassword } from '../src/utils/hash';

const prisma = new PrismaClient();

async function main() {
  const adminPassword = await hashPassword('Admin@123');

  const admin = await prisma.user.upsert({
    where: { email: 'admin@arovia.shop' },
    update: {},
    create: {
      name: 'System Admin',
      phone: '+8801700000000',
      email: 'admin@arovia.shop',
      password: adminPassword,
      role: Role.ADMIN
    }
  });

  const fruits = await prisma.category.upsert({
    where: { slug: 'fruits' },
    update: {},
    create: { name: 'Fruits', slug: 'fruits', isActive: true }
  });

  const vegetable = await prisma.category.upsert({
    where: { slug: 'vegetables' },
    update: {},
    create: { name: 'Vegetables', slug: 'vegetables', isActive: true }
  });

  await prisma.brand.upsert({
    where: { name: 'FreshFarm' },
    update: {},
    create: { name: 'FreshFarm', isActive: true }
  });

  await prisma.product.upsert({
    where: { sku: 'APL-001' },
    update: {},
    create: {
      name: 'Premium Apple',
      slug: 'premium-apple',
      sku: 'APL-001',
      categoryId: fruits.id,
      regularPrice: 220,
      salePrice: 199,
      stockQuantity: 120,
      unit: 'kg',
      status: ProductStatus.PUBLISHED,
      tags: ['fresh', 'fruit']
    }
  });

  await prisma.product.upsert({
    where: { sku: 'VEG-001' },
    update: {},
    create: {
      name: 'Organic Carrot',
      slug: 'organic-carrot',
      sku: 'VEG-001',
      categoryId: vegetable.id,
      regularPrice: 80,
      stockQuantity: 180,
      unit: 'kg',
      status: ProductStatus.PUBLISHED,
      tags: ['organic', 'vegetable']
    }
  });

  console.log({ admin: admin.email, seeded: true });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
