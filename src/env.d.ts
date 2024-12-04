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
  readonly NG_APP_SUPABASE_URL: string;

  [key: string]: any;
  readonly NG_APP_SUPABASE_KEY: string;

  [key: string]: any;
  readonly NG_APP_EMAIL_API_URL: string;
}
