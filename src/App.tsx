import * as React from 'react';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
// import type { PreloadedQuery } from 'react-relay/hooks';
import { useQueryLoader } from 'react-relay';
import RelayEnvironment from './helpers/relay';
import { themeClass, bodyStyle } from './styles/styles.css';
import { AppRepositoryNameQuery } from './__generated__/AppRepositoryNameQuery.graphql';

const { Suspense } = React;

// Define a query
const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      owner {
        login
        avatarUrl
      }
    }
  }
`;

export interface RepoNameQuery {
  preloadedQuery: any;
}

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery<AppRepositoryNameQuery>(
  RelayEnvironment,
  RepositoryNameQuery,
  {
    owner: 'LMulvey',
    name: 'portfolio-v3',
  }
);

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React is isn't
//   ready to render yet). This will show the nearest <Suspense> fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function App() {
  const [repoQueryRef, repoQuery] = useQueryLoader<AppRepositoryNameQuery>(
    RepositoryNameQuery,
    preloadedQuery
  );
  const changeRepo = React.useCallback(() => {
    const repos: string[] = ['react-filter', 'portfolio-v3', 'kingsgate'];
    const randomRepo: string =
      repos[Math.floor(Math.random() * repos.length + 1)] || repos[0];
    repoQuery({ owner: 'LMulvey', name: randomRepo });
  }, [repoQuery]);

  return (
    <div className={themeClass}>
      <header className={bodyStyle}>
        {' '}
        <Suspense fallback={<h1>Loading, baby!</h1>}>
          <RepoName preloadedQuery={repoQueryRef} />
        </Suspense>
        <button onClick={changeRepo}>Change repo</button>
      </header>
    </div>
  );
}

function RepoName(props: RepoNameQuery) {
  const data = usePreloadedQuery<AppRepositoryNameQuery>(
    RepositoryNameQuery,
    props.preloadedQuery
  );
  return (
    <p>
      {data?.repository?.name} by{' '}
      <img
        src={data?.repository?.owner?.avatarUrl}
        alt={data?.repository?.name}
        height="50px"
      />
      {data?.repository?.owner.login}
    </p>
  );
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <App />
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
