import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import { NativeBaseProvider } from "native-base";
import { BoxWithIcon } from "../components";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mock-icon": typeof BoxWithIcon;
    }
  }
}

jest.mock("../components/BoxWithIcon/index.tsx", () => {
  const BoxWithIcon = (props: any) => (
    <mock-icon data-testid="mock-box-with-icon" {...props} />
  );
  return BoxWithIcon; // Return the component directly instead of an object
});

describe("BoxWithIcon", () => {
  it("renders BoxWithIcon with NativeBaseProvider + mocked component", () => {
    const inset = {
      frame: { x: 0, y: 0, width: 0, height: 0 },
      insets: { top: 0, left: 0, right: 0, bottom: 0 },
    };
    const expectedComponent = renderer.create(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <BoxWithIcon iconName="user" text="Hello BoxWithIcon" />
      </NativeBaseProvider>
    );
    expect(expectedComponent).toBeTruthy()
    expect(expectedComponent).toMatchSnapshot();
  });

  it("renders the component correctly without NativeBaseProvider + mocked content + correct property values", () => {
    const iconName = "user";
    const text = "Hello BoxWithIcon";

    const expectedComponent = renderer
      .create(<BoxWithIcon iconName={iconName} text={text} />)
      .toJSON() as ReactTestRendererJSON;

    expect(expectedComponent.props.iconName).toBe("user");
    expect(expectedComponent.props.text).toBe("Hello BoxWithIcon");
    expect(expectedComponent).toMatchSnapshot();
  });
});
