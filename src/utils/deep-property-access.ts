type NN<T> = NonNullable<T>;

/**
 * A 6 Level Depth Object Accessor
 * Used to get to the property or return undefined without throwing runtime error
 */
export class DeepPropertyAccess {
  public static get<T, P1 extends keyof NN<T>>(obj: T, prop1: P1): NN<T>[P1] | undefined;

  // tslint:disable:max-line-length
  public static get<T, P1 extends keyof NN<T>, P2 extends keyof NN<NN<T>[P1]>>(
    obj: T,
    prop1: P1,
    prop2: P2,
  ): NN<NN<T>[P1]>[P2] | undefined;

  public static get<T, P1 extends keyof NN<T>, P2 extends keyof NN<NN<T>[P1]>, P3 extends keyof NN<NN<NN<T>[P1]>[P2]>>(
    obj: T,
    prop1: P1,
    prop2: P2,
    prop3: P3,
  ): NN<NN<NN<T>[P1]>[P2]>[P3] | undefined;

  public static get<
    T,
    P1 extends keyof NN<T>,
    P2 extends keyof NN<NN<T>[P1]>,
    P3 extends keyof NN<NN<NN<T>[P1]>[P2]>,
    P4 extends keyof NN<NN<NN<NN<T>[P1]>[P2]>[P3]>
  >(obj: T, prop1: P1, prop2: P2, prop3: P3, prop4: P4): NN<NN<NN<NN<T>[P1]>[P2]>[P3]>[P4] | undefined;

  public static get<
    T,
    P1 extends keyof NN<T>,
    P2 extends keyof NN<NN<T>[P1]>,
    P3 extends keyof NN<NN<NN<T>[P1]>[P2]>,
    P4 extends keyof NN<NN<NN<NN<T>[P1]>[P2]>[P3]>,
    P5 extends keyof NN<NN<NN<NN<NN<T>[P1]>[P2]>[P3]>[P4]>
  >(
    obj: T,
    prop1: P1,
    prop2: P2,
    prop3: P3,
    prop4: P4,
    prop5: P5,
  ): NN<NN<NN<NN<NN<T>[P1]>[P2]>[P3]>[P4]>[P5] | undefined;

  public static get<
    T,
    P1 extends keyof NN<T>,
    P2 extends keyof NN<NN<T>[P1]>,
    P3 extends keyof NN<NN<NN<T>[P1]>[P2]>,
    P4 extends keyof NN<NN<NN<NN<T>[P1]>[P2]>[P3]>,
    P5 extends keyof NN<NN<NN<NN<NN<T>[P1]>[P2]>[P3]>[P4]>,
    P6 extends keyof NN<NN<NN<NN<NN<NN<T>[P1]>[P2]>[P3]>[P4]>[P5]>
  >(
    obj: T,
    prop1: P1,
    prop2: P2,
    prop3: P3,
    prop4: P4,
    prop5: P5,
    prop6: P6,
    // @ts-ignore
  ): NN<NN<NN<NN<NN<NN<T>[P1]>[P2]>[P3]>[P4]>[P5]>[P6] | undefined;
  /* tslint:enable:max-line-length */

  // ...and so on...

  // the actual function to extract the property
  public static get(obj: any, ...props: string[]): any {
    return obj && props.reduce((result, prop) => (result == null ? undefined : result[prop]), obj);
  }
}

/**
 * Usage
 */
const obj = {
  level6: {
    level5: {
      level4: {
        level3: {
          level2: {
            level1: ['Hello'],
          },
        },
      },
    },
  },
};

const result = DeepPropertyAccess.get(obj, 'level6', 'level5', 'level4', 'level3', 'level2', 'level1');
console.log(result);
