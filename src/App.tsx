import {
  LeftSideComp,
  RightSideComp,
} from "./components/forTest/SideComponents/SideComponents";
import Modal from "./components/modal/Modal";
import SplitScreen from "./components/split-screen/SplitScreen";

// import LargeAuthorListItems from "./components/lists/authors/LargeListItems";
// import SmallAuthorListItems from "./components/lists/authors/SmallListItems";
// import RegularList from "./components/lists/RegularList";
// import { authors } from "./data/authors";

function App() {
  return (
    <>
      <SplitScreen leftWidth={1} rightWidth={1}>
        <LeftSideComp title="Left" />
        <RightSideComp title={"Right"} />
      </SplitScreen>

      <Modal>
        <h2>Hello from Modal!</h2>
      </Modal>

      {/* <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItems}
      />
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItems}
      /> */}
    </>
  );
}

export default App;
