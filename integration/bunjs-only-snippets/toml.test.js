import { describe, it, expect } from "bun:test";

it("syntax", async () => {
  const toml = (await import("./toml-fixture.toml")).default;
  expect(toml.framework).toBe("next");
  expect(toml.bundle.packages["@emotion/react"]).toBe(true);
  expect(toml.array[0].entry_one).toBe("one");
  expect(toml.array[0].entry_two).toBe("two");
  expect(toml.array[1].entry_one).toBe("three");
  expect(toml.array[1].entry_two).toBe(undefined);
  expect(toml.array[1].nested[0].entry_one).toBe("four");
  expect(toml.dev.one.two.three).toBe(4);
  expect(toml.dev.foo).toBe(123);
  expect(toml.inline.array[0]).toBe(1234);
  expect(toml.inline.array[1]).toBe(4);
  expect(toml.dev["foo.bar"]).toBe("baz");
});