// import Link from 'next/link';
// import * as React from 'react';
// import {
//   Configure,
//   Highlight,
//   Hits,
//   Index,
//   InstantSearch,
//   SearchBox,
// } from 'react-instantsearch-dom';

// import { searchClient } from '../lib/searchClient';
// import styled from '../styles';

// interface ArtistHit {
//   name: string;
//   numberOfReleases: number;
//   username: string;
//   basepoints: number;
//   subscribersCount: number;
//   followersCount: number;
//   verified: boolean;
//   id: string;
//   defaultColor: string;
//   profilePicture?: string;
//   profilePictureThumb?: string;
//   coverPhoto?: string;
//   bio?: string;
//   location?: string;
// }

// interface Props {
//   searchQuery: string;
//   searchModalVisible: boolean;
//   onSubmit(event: React.SyntheticEvent<HTMLFormElement, Event>): void;
//   onChange(event: React.SyntheticEvent<HTMLInputElement>): void;
//   hideSearchModal(): void;
//   showSearchModal(): void;
// }

// const Search = (props: Props): JSX.Element => {
//   const {
//     onSubmit,
//     onChange,
//     hideSearchModal,
//     showSearchModal,
//     searchQuery,
//     searchModalVisible,
//   } = props;

//   const decploymentEnv = 'dev';

//   return (
//     <InstantSearch
//       stalledSearchDelay={1000}
//       searchClient={searchClient}
//       indexName={`${deploymentEnv}_users`}
//     >
//       <Configure
//         filters="numberOfReleases > 0"
//         hitsPerPage={6}
//         distinct={true}
//       />
//       <Tooltip
//         interactive={true}
//         onHidden={hideSearchModal}
//         isVisible={searchModalVisible}
//         className="dropdown-search"
//         trigger="manual"
//         arrow={true}
//         size="regular"
//         key="header-search-modal"
//         content={
//           <ResultsContainer>
//             <Link href={`/search?q=${searchQuery}`}>
//               <CurrentSearchTerm onClick={hideSearchModal}>
//                 <p color="currentColor" fontSize="1.4rem">
//                   Search for "<Span fontWeight="600">{searchQuery}</Span>"
//                 </p>
//                 <EnterBox>
//                   <p>Enter &#9166;</p>
//                 </EnterBox>
//               </CurrentSearchTerm>
//             </Link>
//             <Index indexName={`${deploymentEnv}_users`}>
//               <Hits<ArtistHit>
//                 hitComponent={({ hit }) => (
//                   <Link href={`/profile?id=${hit.id}`} as={`/${hit.username}`}>
//                     <HitResult onClick={hideSearchModal}>
//                       <Avatar
//                         image={hit.profilePictureThumb || hit.profilePicture}
//                         color={hit.defaultColor}
//                         size="3rem"
//                       />
//                       <Highlight hit={hit} attribute="name" />
//                     </HitResult>
//                   </Link>
//                 )}
//               />
//             </Index>
//           </ResultsContainer>
//         }
//         placement="auto-start"
//       >
//         <SearchContainer
//           onClick={searchQuery !== '' ? showSearchModal : () => null}
//         >
//           <SearchBox
//             onSubmit={onSubmit}
//             translations={{
//               placeholder: 'Search for artists...',
//             }}
//             onChange={onChange}
//           />
//         </SearchContainer>
//       </Tooltip>
//     </InstantSearch>
//   );
// };

// const SearchContainer = styled.div`
//   display: flex;
//   flex: 1;
//   width: 100%;
// `;

// const ResultsContainer = styled.div`
//   width: 40rem;
//   display: flex;
//   flex-direction: column;
//   max-height: 40rem;
//   overflow-y: scroll;
// `;

// const HitResult = styled.div`
//   height: 5rem;
//   display: flex;
//   flex: none;
//   padding: 1rem;
//   align-items: center;
//   border-radius: 4px;
//   justify-content: flex-start;
//   background-color: white;

//   &:hover {
//     background-color: ${(props) => props.theme.activeBlueOpacity(0.2)};
//     cursor: pointer;
//   }
// `;

// const Span = styled.span<{ fontWeight: string }>`
//   ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`};
// `;

// const EnterBox = styled.div`
//   padding: 4px;
//   align-items: center;
//   justify-content: center;
//   display: flex;
//   border-radius: 2px;
//   border: 1px solid ${(props) => props.theme.lighterGrey};
// `;

// const CurrentSearchTerm = styled.div`
//   padding: 1rem;
//   color: ${(props) => props.theme.darkestGrey};
//   width: 100%;
//   display: flex;
//   justify-content: space-between;

//   &:hover {
//     color: ${(props) => props.theme.black};
//     cursor: pointer;
//   }
// `;

// export default Search;
