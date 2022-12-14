import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from './index';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Category = {
  __typename?: 'Category';
  color?: Maybe<Scalars['String']>;
  companies?: Maybe<Array<Company>>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Company = {
  __typename?: 'Company';
  address?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Category>>;
  contactEmail?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  savedByUsers?: Maybe<Array<Maybe<User>>>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  website?: Maybe<Scalars['String']>;
};

export type CompanyWhereInput = {
  id?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type CreateCompanyInput = {
  address?: InputMaybe<Scalars['String']>;
  contactEmail?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  primaryCategoryId?: InputMaybe<Scalars['String']>;
  secondaryCategoryId?: InputMaybe<Scalars['String']>;
  tertiaryCategoryId?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type CreateCompanyPayload = {
  __typename?: 'CreateCompanyPayload';
  company?: Maybe<Company>;
  errors?: Maybe<Array<Error>>;
  ok: Scalars['Boolean'];
};

export type Error = {
  __typename?: 'Error';
  message?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type LoginUserInput = {
  email: Scalars['String'];
  familyName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  givenName?: InputMaybe<Scalars['String']>;
  idToken?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  socialId?: InputMaybe<Scalars['String']>;
  socialProfileImageUrl?: InputMaybe<Scalars['String']>;
};

export type LoginUserPayload = {
  __typename?: 'LoginUserPayload';
  errors?: Maybe<Array<Error>>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCompany: CreateCompanyPayload;
  login: LoginUserPayload;
  logout: Scalars['Boolean'];
  saveCompany: SaveCompanyPayload;
  signup: SignupPayload;
  unsaveCompany: SaveCompanyPayload;
};


export type MutationCreateCompanyArgs = {
  input: CreateCompanyInput;
};


export type MutationLoginArgs = {
  input: LoginUserInput;
};


export type MutationSaveCompanyArgs = {
  input: SaveCompanyInput;
};


export type MutationSignupArgs = {
  input: NewUserInput;
};


export type MutationUnsaveCompanyArgs = {
  input: SaveCompanyInput;
};

export type NewUserInput = {
  email?: InputMaybe<Scalars['String']>;
  familyName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  givenName?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  socialId?: InputMaybe<Scalars['String']>;
  socialProfileImageUrl?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  companies?: Maybe<Array<Maybe<Company>>>;
  company?: Maybe<Company>;
  isCompanySavedByUser: Scalars['Boolean'];
  me?: Maybe<User>;
};


export type QueryCompanyArgs = {
  where: CompanyWhereInput;
};


export type QueryIsCompanySavedByUserArgs = {
  where: CompanyWhereInput;
};

export type SaveCompanyInput = {
  companyId: Scalars['String'];
};

export type SaveCompanyPayload = {
  __typename?: 'SaveCompanyPayload';
  errors?: Maybe<Array<Error>>;
  ok: Scalars['Boolean'];
};

export type SignupPayload = {
  __typename?: 'SignupPayload';
  errors?: Maybe<Array<Error>>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  savedCompanies?: Maybe<Array<Maybe<Company>>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Category: ResolverTypeWrapper<Category>;
  Company: ResolverTypeWrapper<Company>;
  CompanyWhereInput: CompanyWhereInput;
  CreateCompanyInput: CreateCompanyInput;
  CreateCompanyPayload: ResolverTypeWrapper<CreateCompanyPayload>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Error: ResolverTypeWrapper<Error>;
  LoginUserInput: LoginUserInput;
  LoginUserPayload: ResolverTypeWrapper<LoginUserPayload>;
  Mutation: ResolverTypeWrapper<{}>;
  NewUserInput: NewUserInput;
  Query: ResolverTypeWrapper<{}>;
  SaveCompanyInput: SaveCompanyInput;
  SaveCompanyPayload: ResolverTypeWrapper<SaveCompanyPayload>;
  SignupPayload: ResolverTypeWrapper<SignupPayload>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Category: Category;
  Company: Company;
  CompanyWhereInput: CompanyWhereInput;
  CreateCompanyInput: CreateCompanyInput;
  CreateCompanyPayload: CreateCompanyPayload;
  Date: Scalars['Date'];
  Error: Error;
  LoginUserInput: LoginUserInput;
  LoginUserPayload: LoginUserPayload;
  Mutation: {};
  NewUserInput: NewUserInput;
  Query: {};
  SaveCompanyInput: SaveCompanyInput;
  SaveCompanyPayload: SaveCompanyPayload;
  SignupPayload: SignupPayload;
  String: Scalars['String'];
  User: User;
};

export type CategoryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companies?: Resolver<Maybe<Array<ResolversTypes['Company']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<ResolversTypes['Category']>>, ParentType, ContextType>;
  contactEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  savedByUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCompanyPayloadResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreateCompanyPayload'] = ResolversParentTypes['CreateCompanyPayload']> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type ErrorResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginUserPayloadResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LoginUserPayload'] = ResolversParentTypes['LoginUserPayload']> = {
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCompany?: Resolver<ResolversTypes['CreateCompanyPayload'], ParentType, ContextType, RequireFields<MutationCreateCompanyArgs, 'input'>>;
  login?: Resolver<ResolversTypes['LoginUserPayload'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  logout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  saveCompany?: Resolver<ResolversTypes['SaveCompanyPayload'], ParentType, ContextType, RequireFields<MutationSaveCompanyArgs, 'input'>>;
  signup?: Resolver<ResolversTypes['SignupPayload'], ParentType, ContextType, RequireFields<MutationSignupArgs, 'input'>>;
  unsaveCompany?: Resolver<ResolversTypes['SaveCompanyPayload'], ParentType, ContextType, RequireFields<MutationUnsaveCompanyArgs, 'input'>>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
  companies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Company']>>>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<QueryCompanyArgs, 'where'>>;
  isCompanySavedByUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryIsCompanySavedByUserArgs, 'where'>>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
};

export type SaveCompanyPayloadResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SaveCompanyPayload'] = ResolversParentTypes['SaveCompanyPayload']> = {
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignupPayloadResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SignupPayload'] = ResolversParentTypes['SignupPayload']> = {
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  familyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  givenName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  savedCompanies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Company']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Category?: CategoryResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  CreateCompanyPayload?: CreateCompanyPayloadResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Error?: ErrorResolvers<ContextType>;
  LoginUserPayload?: LoginUserPayloadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SaveCompanyPayload?: SaveCompanyPayloadResolvers<ContextType>;
  SignupPayload?: SignupPayloadResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

