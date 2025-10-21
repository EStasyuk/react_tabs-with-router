import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId?: string }>();
  const activeTab = tabs.find(t => t.id === tabId);

  return (
    <div>
      <h1 className="title">Tabs page</h1>
      <ul className="tabs__list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={tab.id === tabId ? 'is-active' : ''}
          >
            <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
          </li>
        ))}
      </ul>

      <div className="tabContent">
        {activeTab ? <p>{activeTab.content}</p> : <p>Please select a tab</p>}
      </div>
    </div>
  );
};
