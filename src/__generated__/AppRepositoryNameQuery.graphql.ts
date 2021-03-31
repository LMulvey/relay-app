/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AppRepositoryNameQueryVariables = {
    owner: string;
    name: string;
};
export type AppRepositoryNameQueryResponse = {
    readonly repository: {
        readonly name: string;
        readonly owner: {
            readonly login: string;
            readonly avatarUrl: string;
        };
    } | null;
};
export type AppRepositoryNameQuery = {
    readonly response: AppRepositoryNameQueryResponse;
    readonly variables: AppRepositoryNameQueryVariables;
};



/*
query AppRepositoryNameQuery(
  $owner: String!
  $name: String!
) {
  repository(owner: $owner, name: $name) {
    name
    owner {
      __typename
      login
      avatarUrl
      id
    }
    id
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "name"
    } as any, v1 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "owner"
    } as any, v2 = [
        {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
        } as any,
        {
            "kind": "Variable",
            "name": "owner",
            "variableName": "owner"
        } as any
    ], v3 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
    } as any, v4 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "login",
        "storageKey": null
    } as any, v5 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "avatarUrl",
        "storageKey": null
    } as any, v6 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": [
                (v0 /*: any*/),
                (v1 /*: any*/)
            ],
            "kind": "Fragment",
            "metadata": null,
            "name": "AppRepositoryNameQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v2 /*: any*/),
                    "concreteType": "Repository",
                    "kind": "LinkedField",
                    "name": "repository",
                    "plural": false,
                    "selections": [
                        (v3 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "owner",
                            "plural": false,
                            "selections": [
                                (v4 /*: any*/),
                                (v5 /*: any*/)
                            ],
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [
                (v1 /*: any*/),
                (v0 /*: any*/)
            ],
            "kind": "Operation",
            "name": "AppRepositoryNameQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v2 /*: any*/),
                    "concreteType": "Repository",
                    "kind": "LinkedField",
                    "name": "repository",
                    "plural": false,
                    "selections": [
                        (v3 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "owner",
                            "plural": false,
                            "selections": [
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "__typename",
                                    "storageKey": null
                                },
                                (v4 /*: any*/),
                                (v5 /*: any*/),
                                (v6 /*: any*/)
                            ],
                            "storageKey": null
                        },
                        (v6 /*: any*/)
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "dff6c26fbba273e2375e9f4fa61305d8",
            "id": null,
            "metadata": {},
            "name": "AppRepositoryNameQuery",
            "operationKind": "query",
            "text": "query AppRepositoryNameQuery(\n  $owner: String!\n  $name: String!\n) {\n  repository(owner: $owner, name: $name) {\n    name\n    owner {\n      __typename\n      login\n      avatarUrl\n      id\n    }\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'b5faed1b3b3bc5f8a228a17748c69fc4';
export default node;
