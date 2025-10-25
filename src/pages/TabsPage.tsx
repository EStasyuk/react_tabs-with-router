import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId?: string }>();
  const navigate = useNavigate();

  const selectedIndex = tabs.findIndex(t => t.id === tabId);

  const handleTabSelect = (index: number) => {
    navigate(`/tabs/${tabs[index].id}`);
  };

  const isTabSelected = selectedIndex !== -1;

  return (
    <div>
      <h1 className="title">Tabs page</h1>

      {tabs.length > 0 ? (
        <Tabs
          selectedIndex={isTabSelected ? selectedIndex : undefined}
          onSelect={handleTabSelect}
          className="tabs__wrapper"
        >
          <TabList className="tabs__list">
            {tabs.map(tab => (
              <Tab
                key={tab.id}
                className="tabs__item"
                selectedClassName="tabs__item--selected"
                data-cy="Tab"
              >
                {tab.title}
              </Tab>
            ))}
          </TabList>

          {isTabSelected ? (
            <>
              {tabs.map(tab => (
                <TabPanel key={tab.id} className="tabs__panel">
                  {tab.content}
                </TabPanel>
              ))}
            </>
          ) : (
            <div className="tabs__content-placeholder">Please select a tab</div>
          )}
        </Tabs>
      ) : (
        <p>No tabs available.</p>
      )}
    </div>
  );
};
