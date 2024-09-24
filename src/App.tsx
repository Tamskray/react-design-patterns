import {
  LeftSideComp,
  RightSideComp,
} from "./components/forTest/SideComponents/SideComponents";
import LargeAuthorListItems from "./components/lists/authors/LargeListItems";
import SmallAuthorListItems from "./components/lists/authors/SmallListItems";
import RegularList from "./components/lists/RegularList";
import SplitScreen from "./components/split-screen/SplitScreen";
import { authors } from "./data/authors";

function App() {
  return (
    <>
      <SplitScreen leftWidth={1} rightWidth={1}>
        <LeftSideComp title="Left" />
        <RightSideComp title={"Right"} />
      </SplitScreen>

      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItems}
      />
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItems}
      />
    </>
  );
}

export default App;
