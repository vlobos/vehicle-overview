import React from 'react';
import Overview from '../Overview';
import SeeMoreLink from '../Overview';
import { shallow, mount } from 'enzyme';
import axios from 'axios';

describe('Overview', () => {
  it ('shows Overview has length of 1', ()=> {
    const component = shallow(<Overview/>);
    expect(component).toHaveLength(1);
  })

  it('calls componentDidMount on mount', () => {
    const componentDidMountSpy = jest.spyOn(Overview.prototype, "componentDidMount");
    const OverviewWrapper = mount(<Overview />);
    expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
    OverviewWrapper.unmount();
  });

  it('expands Sellers Comment on click', () => {
    const expandCommentSpy = jest.spyOn(Overview.prototype, 'expandComment')
    const wrapper = mount(<Overview/>);
    wrapper.find("div#seemorelink").simulate('click');
    expect(expandCommentSpy).toBeCalled();
  });

});



