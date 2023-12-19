interface ImportMeta {
  env: {
    [key: string]: string;
  };
}

type Brand<K, T> = K & { __brand: T };
