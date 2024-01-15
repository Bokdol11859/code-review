export interface listProps {
  cover: CoverProps;
  properties: PropertiesProps;
}

export interface PropertiesProps {
  Grade: {
    multi_select: MultiSelectProps[];
  };
  Described: {
    rich_text: TextProps[];
  };
  Date: {
    date: {
      start: string;
      end: string;
    };
  };
  Ost: {
    url: string;
  };
  WatchaPedia: {
    url: string;
  };
  Trailer: {
    url: string;
  };

  Category: {
    multi_select: MultiSelectProps[];
  };
  Tag: {
    select: {
      name: string;
      color: string;
    };
  };
  Name: {
    title: TextProps[];
  };
  FamousLine: {
    rich_text: TextProps[];
  };
}

export interface TextProps {
  text: {
    content: string;
  };
}
export interface MultiSelectProps {
  color: string;
  id: string;
  name: string;
}
export interface CoverProps {
  external: {
    url: string;
  };
  file?: {
    url: string;
  };
}

export interface FilterQeuryType {
  property: string;
  multi_select: {
    contains: string;
  };
}
