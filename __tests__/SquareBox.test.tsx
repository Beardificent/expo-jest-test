import renderer from "react-test-renderer";
import { SquareBox } from "../components";
import { Link, NativeBaseProvider } from "native-base"; //mocking component would lead to no longer needing the NativeBaseProvider

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

describe("Squarebox", () => {
  it("renders SquareBox with NativeBaseProvider", () => {
    const expectedComponent = renderer.create(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <SquareBox
          children={<Link href="http://www.facebook.com">Facebook</Link>}
        />
      </NativeBaseProvider>
    );
    expect(expectedComponent).toBeTruthy();
    expect(expectedComponent).toMatchSnapshot();
  });

  it("renders SquareBox with NativeBaseProvider + correct property values", () => {
    const expectedComponent = renderer.create(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <SquareBox children={<Link href="">Foobar</Link>} />
      </NativeBaseProvider>
    );
    expect(
      expectedComponent.root.findByType(SquareBox).props.children.type
    ).toBe(Link);
    expect(expectedComponent.root.findByType(Link).props.children).not.toBe(
      "Facebook"
    );
    expect(expectedComponent.root.findByType(Link).props.children).toBe(
      "Foobar"
    );
    expect(expectedComponent).toMatchSnapshot();
  });
});
