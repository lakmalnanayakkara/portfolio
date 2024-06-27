export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly REACT = new Tag('React', 'blue');
  static readonly NODEJS = new Tag('NodeJS', 'brown');
  static readonly SPRING_BOOT = new Tag('SpringBoot', 'orange');
  static readonly DOT_NET = new Tag('.NET', 'purple');
  static readonly JAVASCRIPT = new Tag('JavaScript', 'yellow');
  static readonly TYPESCRIPT = new Tag('TypeScript', 'red');
  static readonly MONGODB = new Tag('MongoDB', 'green');
  static readonly MYSQL = new Tag('MySQL', 'gray');
  static readonly MSSQL = new Tag('MSSQL', 'red');
  static readonly EXPRESS = new Tag('ExpressJS', 'black');

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}

  toString() {
    return this.key;
  }
}
