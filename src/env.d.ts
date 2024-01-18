interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  /**
   * Build-in environment variable.
   * @see Docs https://github.com/chihab/dotenv-run/packages/angular#node_env.
   */
  readonly NODE_ENV: string;

  [key: string]: any;
  readonly SUPABASE_URL: string = env.SUPABASE_URL;

  [key: string]: any;
  readonly SUPABASE_KEY: string= env.SUPABASE_KEY;
}
