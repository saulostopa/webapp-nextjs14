This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Install Postgres

1. Access URL:
   https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

2. Download the correspondent version with your OS.

3. Install Postgres.

4. Set your password for your local Postgres.

5. Create a database with the name set in the `.env` file.

6. Run the command: `npx prisma migrate dev`.

### Start Prisma ORM

```bash
# start migration | do not use this in production!!
npx prisma migrate dev --name {name-of-your-migration-folder}

# generates assets based on your prisma/schema.prisma
# It will erase all data on the database!!
npx prisma generate

# connects to your database and adds/updates Prisma models (new or changed fields) to your Prisma schema
# Ex.: To use with other .env files: dotenv -e .env.development.local -- npx prisma db push
npx prisma db push

# Delete Database
npx prisma migrate reset

# allows you to seed your data from the seed file
npx prisma db seed

# allows you to interact with and manage your data interactively
npx prisma studio
```

### Update Database on Vercel Without Resetting

To update the database schema on Vercel without resetting or seeding:

1. **Modify `schema.prisma` Locally**  
   Make necessary changes to your Prisma schema.

2. **Create a Migration**  
   ```bash
   npx prisma migrate dev --name <migration-name>
   ```

3. **Deploy to Vercel**  
   Commit and push changes to trigger a Vercel deployment.

4. **Apply Migration on Vercel Database**  
   Set the `POSTGRES_PRISMA_URL` to point to the Vercel database and run:
   ```bash
   npx prisma migrate deploy
   ```

- Access URL:
  [migrate-deploy](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#migrate-deploy)

**Note:** Always back up the database before making changes.

### All Current Seeds To Run Individually

```
ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/users
ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/buildings
ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/units
ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/documents
ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/payments
ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/ledgers
ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/photoBuilding
ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/photoUnit
ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/buildingsOnManagers
ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/buildingsOnOwners
ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/documentsOnManagers
ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/documentsOnOwners
ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/documentsOnTenants
ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/ownersOnLedgers
ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/ownersOnPayments
ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/unitsOnManagers
ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/unitsOnOwners
ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/unitsOnTenants
ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/templateManagement
ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/templateManagementDocs
ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/templateManagementOnDocs
```

### Troubleshooting on Prisma Migration/Generate

- Delete the folder: `./node_modules/.prisma/client`

### Update DB Schema Entity Relationship Diagram (ERD)

- Access URL:
  [https://prisma-erd.simonknott.de/](https://prisma-erd.simonknott.de/)
- Access URL:
  [https://prisma-erd.simonknott.de/](https://prisma-erd.simonknott.de/)

- Copy/Paste the Schema DB from `prisma/schema.prisma` and click on Transform.

- Download the ERD SVG.

- Credits: https://github.com/keonik/prisma-erd-generator
- Credits: https://github.com/keonik/prisma-erd-generator

### Cron Job Line Explanation

```
* * * * * "command to be executed"
- - - - -
| | | | |
| | | | ----- Day of week (0 - 7) (Sunday=0 or 7)
| | | ------- Month (1 - 12)
| | --------- Day of month (1 - 31)
| ----------- Hour (0 - 23)
------------- Minute (0 - 59)
```

### View of Service

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `app/page.tsx`. The page
auto-updates as you edit the file.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.
The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.