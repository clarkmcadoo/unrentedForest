import React from 'react';
import renderer from 'react-test-renderer';
import BaseLayout from "../Components/BaseLayout";
import {Provider} from "react-redux";
import {store} from "../store/index"

test('BaseLayout renders correctly', () => {
    const tree = renderer.create(
       <Provider store={store}>
           <BaseLayout/>
       </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});