import pg from 'pg';

// definir uma forma para ler de acordo com o ambiente
export = {
  development: {
    dialect: 'sqlite',
    storage: ':memory:',
  },
  production: {
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DATABASE || 'trybecar',
    dialectModule: pg,
    // A migration rodou quando deixei isso comentado para rodar local
    // Para rodar na nuvem preciso disso
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
