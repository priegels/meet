import { loadFeature, defineFeature } from 'jest-cucumber';

import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import EventList from '../EventList';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    //Scenario 1
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let EventListWrapper;
        given('the user has searched for events by city', () => {
            EventListWrapper = shallow(<EventList events={mockData} />);
        });

        when('the user accesses a list of events', () => {
            EventListWrapper = shallow(<EventList events={mockData} />);
            expect(EventListWrapper.find('.EventList')).toHaveLength(1);
        });

        let EventWrapper;
        then('the event element is collapsed by default', () => {
            EventWrapper = shallow(<Event event={mockData[0]} />);
            expect(EventWrapper.state('collapsed')).toEqual(true);

        });
    });

    //Scenario 2
    test('A user can expand an events details', ({ given, when, then }) => {
        let EventWrapper;
        given('the user has a list of events', () => {
            EventWrapper = shallow(<Event event={mockData[0]} />);
            expect(EventWrapper.state('collapsed')).toEqual(true);
        });

        when('the user clicks on \'Show details\' for a given event element', () => {
            const showDetails = EventWrapper.find(".show-details-button");
            showDetails.simulate("click");
        });

        then('the event element will be expanded to show its details', () => {
            expect(EventWrapper.state("collapsed")).toEqual(false);
        });
    });

    //Scenario 3
    test('A user can collapse an event element to hide its details', ({ given, when, then }) => {
        given('user has expanded an event element to show its details', () => {

        });

        when('the user clicks on \'Hide details\' for a given event element', () => {

        });

        then('the event element will collapse to hide its details', () => {

        });
    });
});