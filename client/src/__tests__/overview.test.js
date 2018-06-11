import React from 'react';
import Overview from '../Overview';
import { shallow, mount } from 'enzyme';

// describe(<Overview/>, ()=>{
//   it ('Overview has length of 1', ()=> {
//     const component = shallow(<Overview/>);
//     expect(component).toHaveLength(1);
//   });
// });


describe("Overview", () => {
  it("calls componentDidMount on mount", () => {
    const componentDidMountSpy = jest.spyOn(
      Overview.prototype,
      "componentDidMount"
    );
    const OverviewWrapper = mount(<Overview />);
    expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
    OverviewWrapper.unmount();
  });
});

