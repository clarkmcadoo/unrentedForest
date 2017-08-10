import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from "../Components/BaseLayout";
import {Provider} from "react-redux";
import {store} from "../store/index"

test('Navbar renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
          <NavBar/>
       </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});