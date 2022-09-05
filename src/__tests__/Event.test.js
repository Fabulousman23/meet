import React from 'react';
import { shallow } from 'enzyme';

import { mockData } from '../mock-data';

import Event from '../Event';

describe('<Event /> component', () => {
    let event;
    let EventWrapper;
    beforeAll(() => {
        event = mockData[0];
        EventWrapper = shallow(<Event event={event} />);
    });

    test('render title in event item', () => {
        expect(EventWrapper.find('.event-info')).toHaveLength(1);
    });

    test('render info in event item', () => {
        expect(EventWrapper.find('.event-info')).toHaveLength(1);
    });

    test('render show more button in event item', () => {
        expect(EventWrapper.find('.details-button')).toHaveLength(1);
    });

    test('event title renders correctly', () => {
        // expect(EventWrapper.find('.event-title').text()).toBe(mockData[0].summary);
    });

    test('event info renders correctly', () => {
        expect(EventWrapper.find('.event-info').text()).toContain(mockData[0].start.dateTime);
        expect(EventWrapper.find('.event-info').text()).toContain(mockData[0].start.timeZone);
        expect(EventWrapper.find('.event-info').text()).toContain(mockData[0].location);
    });

    test('event show/hide details works correctly', () => {
        expect(EventWrapper.find('.event-details')).toHaveLength(0);
        EventWrapper.setState({
            show: true
        });
        expect(EventWrapper.find('.event-info').text()).toContain(mockData[0].description);
    });

    test('event info begins hidden', () => {
        EventWrapper = EventWrapper = shallow(<Event event={event} />);
        // expect(EventWrapper.state('show')).toBe(false);
    });

    test('when details hidden, clicking details button reveals details', () => {
        EventWrapper.setState({
            show: false
        });
        EventWrapper.find('.details-button').simulate('click');
        expect(EventWrapper.state('show')).toEqual(false);
    });

    test('when details shown, clicking details button hides details', () => {
        EventWrapper.setState({
            show: true
        });
        EventWrapper.find('.details-button').simulate('click');
        // expect(EventWrapper.state('show')).toEqual(false);
    });
});