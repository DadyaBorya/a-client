import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type CreateUserInput = {
  displayName: Scalars['String']['input'];
  isBlocked?: InputMaybe<Scalars['Boolean']['input']>;
  isSuperUser?: InputMaybe<Scalars['Boolean']['input']>;
  password: Scalars['String']['input'];
  permissions?: InputMaybe<Array<Permission>>;
  username: Scalars['String']['input'];
};

export type DeviceModel = {
  __typename?: 'DeviceModel';
  browser?: Maybe<Scalars['String']['output']>;
  os?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type DmsuProcessModel = {
  __typename?: 'DmsuProcessModel';
  errorMessage?: Maybe<Scalars['String']['output']>;
  isAi: Scalars['Boolean']['output'];
  personInfoFile: StorageModel;
  process: ProcessModel;
  resultFile?: Maybe<StorageModel>;
  stage: DmsuStage;
  withoutWMFile?: Maybe<StorageModel>;
};

export enum DmsuStage {
  ExtractImageAndRemoveWaterMark = 'EXTRACT_IMAGE_AND_REMOVE_WATER_MARK',
  Finished = 'FINISHED',
  GenerateResultData = 'GENERATE_RESULT_DATA',
  ModifyData = 'MODIFY_DATA',
  NormalizeBirthPlace = 'NORMALIZE_BIRTH_PLACE',
  NormalizeForeignPassportsIssuer = 'NORMALIZE_FOREIGN_PASSPORTS_ISSUER',
  NormalizeGenitiveFullname = 'NORMALIZE_GENITIVE_FULLNAME',
  NormalizePassportsIssuer = 'NORMALIZE_PASSPORTS_ISSUER',
  NormalizeRegistarionAddress = 'NORMALIZE_REGISTARION_ADDRESS',
  NotStarted = 'NOT_STARTED',
  ParsePersonInfo = 'PARSE_PERSON_INFO',
  ValidatePersonInfo = 'VALIDATE_PERSON_INFO'
}

export type EnableTotpInput = {
  pin: Scalars['String']['input'];
  secret: Scalars['String']['input'];
};

export type ErdProcessModel = {
  __typename?: 'ErdProcessModel';
  acceptedInputFile?: Maybe<StorageModel>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  grantedInputFile?: Maybe<StorageModel>;
  isAi: Scalars['Boolean']['output'];
  process: ProcessModel;
  resultFile?: Maybe<StorageModel>;
  stage: ErdStage;
};

export enum ErdStage {
  Finished = 'FINISHED',
  NotStarted = 'NOT_STARTED'
}

export type HstsMvsProcessModel = {
  __typename?: 'HstsMvsProcessModel';
  carInfoFile: StorageModel;
  driverLicenseFile?: Maybe<StorageModel>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  isAi: Scalars['Boolean']['output'];
  process: ProcessModel;
  resultFile?: Maybe<StorageModel>;
  stage: HstsMvsStage;
};

export enum HstsMvsStage {
  Finished = 'FINISHED',
  GenerateResultData = 'GENERATE_RESULT_DATA',
  ModifyData = 'MODIFY_DATA',
  NormalizeDriverLicenceIssuedBy = 'NORMALIZE_DRIVER_LICENCE_ISSUED_BY',
  NormalizeRegistrationPlace = 'NORMALIZE_REGISTRATION_PLACE',
  NotStarted = 'NOT_STARTED',
  ParseCarInfo = 'PARSE_CAR_INFO',
  ParseDriverLicence = 'PARSE_DRIVER_LICENCE',
  ValidateCarInfo = 'VALIDATE_CAR_INFO',
  ValidateDriverLicence = 'VALIDATE_DRIVER_LICENCE'
}

export type ListProcessesInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<OrderDirection>;
  page?: InputMaybe<Scalars['Int']['input']>;
  searchFor?: InputMaybe<Scalars['String']['input']>;
};

export type ListUsersInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<OrderDirection>;
  page?: InputMaybe<Scalars['Int']['input']>;
  searchFor?: InputMaybe<Scalars['String']['input']>;
};

export type LocationModel = {
  __typename?: 'LocationModel';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  latidute: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type LoginInput = {
  password: Scalars['String']['input'];
  pin?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  clearSessionCookie: Scalars['Boolean']['output'];
  createDmsuProcess: Scalars['String']['output'];
  createErdProcess: Scalars['String']['output'];
  createHstsMvsProcess: Scalars['String']['output'];
  createPfuProcess: Scalars['String']['output'];
  createUser: Scalars['Boolean']['output'];
  disabledTotp: Scalars['Boolean']['output'];
  enableTotp: Scalars['Boolean']['output'];
  login: Scalars['Boolean']['output'];
  logout: Scalars['Boolean']['output'];
  removeSession: Scalars['Boolean']['output'];
  resetPasswordUser: Scalars['Boolean']['output'];
  updatePasswordUser: Scalars['Boolean']['output'];
  updateUser: Scalars['Boolean']['output'];
};


export type MutationCreateDmsuProcessArgs = {
  isAi?: InputMaybe<Scalars['Boolean']['input']>;
  personInfoFile: Scalars['Upload']['input'];
};


export type MutationCreateErdProcessArgs = {
  acceptedInputFile?: InputMaybe<Scalars['Upload']['input']>;
  grantedInputFile?: InputMaybe<Scalars['Upload']['input']>;
  isAi?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateHstsMvsProcessArgs = {
  carInfoFile: Scalars['Upload']['input'];
  driverLicenseFile?: InputMaybe<Scalars['Upload']['input']>;
  isAi?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePfuProcessArgs = {
  inputFile: Scalars['Upload']['input'];
  isAi?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationDisabledTotpArgs = {
  userId: Scalars['String']['input'];
};


export type MutationEnableTotpArgs = {
  data: EnableTotpInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRemoveSessionArgs = {
  id: Scalars['String']['input'];
};


export type MutationResetPasswordUserArgs = {
  data: ResetUserPasswordInput;
};


export type MutationUpdatePasswordUserArgs = {
  data: UpdateUserPasswordInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum Permission {
  DmsuCreate = 'DMSU_CREATE',
  ErdCreate = 'ERD_CREATE',
  HstsMvsCreate = 'HSTS_MVS_CREATE',
  PfuCreate = 'PFU_CREATE',
  ProcessReadAll = 'PROCESS_READ_ALL',
  ProcessReadOwn = 'PROCESS_READ_OWN',
  UserCreate = 'USER_CREATE',
  UserDelete = 'USER_DELETE',
  UserRead = 'USER_READ',
  UserResetPassword = 'USER_RESET_PASSWORD',
  UserUpdate = 'USER_UPDATE'
}

export type PfuProcessModel = {
  __typename?: 'PfuProcessModel';
  errorMessage?: Maybe<Scalars['String']['output']>;
  inputFile: StorageModel;
  isAi: Scalars['Boolean']['output'];
  process: ProcessModel;
  resultFile?: Maybe<StorageModel>;
  stage: PfuStage;
};

export enum PfuStage {
  Finished = 'FINISHED',
  GenerateResultData = 'GENERATE_RESULT_DATA',
  ModifyData = 'MODIFY_DATA',
  NormalizeInsureName = 'NORMALIZE_INSURE_NAME',
  NotStarted = 'NOT_STARTED',
  ParseInputFile = 'PARSE_INPUT_FILE',
  TransformInputFile = 'TRANSFORM_INPUT_FILE',
  ValidateInputFile = 'VALIDATE_INPUT_FILE'
}

export type ProcessListModel = {
  __typename?: 'ProcessListModel';
  currentPage: Scalars['Int']['output'];
  data: Array<ProcessModel>;
  hasNext: Scalars['Boolean']['output'];
  hasPrev: Scalars['Boolean']['output'];
  pages: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ProcessModel = {
  __typename?: 'ProcessModel';
  createdAt: Scalars['DateTime']['output'];
  finishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  owner?: Maybe<Scalars['String']['output']>;
  status: Status;
  type: ProcessType;
  user: UserModel;
};

export enum ProcessType {
  Dmsu = 'DMSU',
  Erd = 'ERD',
  HstsMvs = 'HSTS_MVS',
  Pfu = 'PFU'
}

export type Query = {
  __typename?: 'Query';
  findAllOwnProcesses: ProcessListModel;
  findAllProcesses: ProcessListModel;
  findAllUsers: UserListModel;
  findCurrentSession: SessionModel;
  findDmsuById: DmsuProcessModel;
  findErdById: ErdProcessModel;
  findHstsMvsById: HstsMvsProcessModel;
  findMe: UserModel;
  findPfuById: PfuProcessModel;
  findSessions: Array<SessionModel>;
  findSessionsById: Array<SessionModel>;
  findUserById: UserModel;
  generateTotpSecret: TotpModel;
};


export type QueryFindAllOwnProcessesArgs = {
  data: ListProcessesInput;
};


export type QueryFindAllProcessesArgs = {
  data: ListProcessesInput;
};


export type QueryFindAllUsersArgs = {
  data: ListUsersInput;
};


export type QueryFindDmsuByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindErdByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindHstsMvsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindPfuByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindSessionsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindUserByIdArgs = {
  id: Scalars['String']['input'];
};

export type ResetUserPasswordInput = {
  id: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SessionMetadaModel = {
  __typename?: 'SessionMetadaModel';
  device: DeviceModel;
  ip: Scalars['String']['output'];
  location: LocationModel;
};

export type SessionModel = {
  __typename?: 'SessionModel';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  metadata: SessionMetadaModel;
  userId: Scalars['String']['output'];
};

export enum Status {
  End = 'END',
  Error = 'ERROR',
  Pending = 'PENDING',
  Started = 'STARTED'
}

export type StorageModel = {
  __typename?: 'StorageModel';
  extension: Scalars['String']['output'];
  id: Scalars['String']['output'];
  inputFilename: Scalars['String']['output'];
  outputFilename?: Maybe<Scalars['String']['output']>;
  size: Scalars['Int']['output'];
};

export type TotpModel = {
  __typename?: 'TotpModel';
  qrcodeUrl: Scalars['String']['output'];
  secret: Scalars['String']['output'];
};

export type UpdateUserInput = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  isBlocked?: InputMaybe<Scalars['Boolean']['input']>;
  isSuperUser?: InputMaybe<Scalars['Boolean']['input']>;
  permissions?: InputMaybe<Array<Permission>>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserPasswordInput = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserListModel = {
  __typename?: 'UserListModel';
  currentPage: Scalars['Int']['output'];
  data: Array<UserModel>;
  hasNext: Scalars['Boolean']['output'];
  hasPrev: Scalars['Boolean']['output'];
  pages: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type UserModel = {
  __typename?: 'UserModel';
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isBlocked: Scalars['Boolean']['output'];
  isSuperUser: Scalars['Boolean']['output'];
  isTotpEnabled: Scalars['Boolean']['output'];
  permissions: Array<Permission>;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type ChangeUserPasswordMutationVariables = Exact<{
  data: UpdateUserPasswordInput;
}>;


export type ChangeUserPasswordMutation = { __typename?: 'Mutation', updatePasswordUser: boolean };

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: boolean };

export type ResetUserPasswordMutationVariables = Exact<{
  data: ResetUserPasswordInput;
}>;


export type ResetUserPasswordMutation = { __typename?: 'Mutation', resetPasswordUser: boolean };

export type UpdateUserMutationVariables = Exact<{
  data: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: boolean };

export type ClearSessionCookieMutationVariables = Exact<{ [key: string]: never; }>;


export type ClearSessionCookieMutation = { __typename?: 'Mutation', clearSessionCookie: boolean };

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: boolean };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RemoveSessionMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type RemoveSessionMutation = { __typename?: 'Mutation', removeSession: boolean };

export type CreateDmsuProcessMutationVariables = Exact<{
  personInfoFile: Scalars['Upload']['input'];
  isAi?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CreateDmsuProcessMutation = { __typename?: 'Mutation', createDmsuProcess: string };

export type CreateErdProcessMutationVariables = Exact<{
  grantedInputFile?: InputMaybe<Scalars['Upload']['input']>;
  acceptedInputFile?: InputMaybe<Scalars['Upload']['input']>;
  isAi?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CreateErdProcessMutation = { __typename?: 'Mutation', createErdProcess: string };

export type CreateHstsMvsProcessMutationVariables = Exact<{
  driverLicenseFile?: InputMaybe<Scalars['Upload']['input']>;
  carInfoFile: Scalars['Upload']['input'];
  isAi?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CreateHstsMvsProcessMutation = { __typename?: 'Mutation', createHstsMvsProcess: string };

export type CreatePfuProcessMutationVariables = Exact<{
  inputFile: Scalars['Upload']['input'];
  isAi?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CreatePfuProcessMutation = { __typename?: 'Mutation', createPfuProcess: string };

export type EnableTotpMutationVariables = Exact<{
  data: EnableTotpInput;
}>;


export type EnableTotpMutation = { __typename?: 'Mutation', enableTotp: boolean };

export type FindAllUsersQueryVariables = Exact<{
  data: ListUsersInput;
}>;


export type FindAllUsersQuery = { __typename?: 'Query', findAllUsers: { __typename?: 'UserListModel', total: number, pages: number, currentPage: number, hasNext: boolean, hasPrev: boolean, data: Array<{ __typename?: 'UserModel', id: string, username: string, displayName: string, permissions: Array<Permission>, isTotpEnabled: boolean, isSuperUser: boolean, isBlocked: boolean, createdAt: any, updatedAt: any }> } };

export type FindMeQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMeQuery = { __typename?: 'Query', findMe: { __typename?: 'UserModel', id: string, username: string, displayName: string, permissions: Array<Permission>, isTotpEnabled: boolean, isSuperUser: boolean, isBlocked: boolean, createdAt: any, updatedAt: any } };

export type FindUserByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindUserByIdQuery = { __typename?: 'Query', findUserById: { __typename?: 'UserModel', id: string, username: string, displayName: string, permissions: Array<Permission>, isTotpEnabled: boolean, isSuperUser: boolean, isBlocked: boolean, createdAt: any, updatedAt: any } };

export type FindCurrentSessionQueryVariables = Exact<{ [key: string]: never; }>;


export type FindCurrentSessionQuery = { __typename?: 'Query', findCurrentSession: { __typename?: 'SessionModel', id: string, userId: string, createdAt: string, metadata: { __typename?: 'SessionMetadaModel', ip: string, location: { __typename?: 'LocationModel', city: string, country: string, latidute: number, longitude: number }, device: { __typename?: 'DeviceModel', os?: string | null, browser?: string | null, type?: string | null } } } };

export type FindSessionsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindSessionsQuery = { __typename?: 'Query', findSessions: Array<{ __typename?: 'SessionModel', id: string, userId: string, createdAt: string, metadata: { __typename?: 'SessionMetadaModel', ip: string, location: { __typename?: 'LocationModel', city: string, country: string, latidute: number, longitude: number }, device: { __typename?: 'DeviceModel', os?: string | null, browser?: string | null, type?: string | null } } }> };

export type FindSessionsByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindSessionsByIdQuery = { __typename?: 'Query', findSessionsById: Array<{ __typename?: 'SessionModel', id: string, userId: string, createdAt: string, metadata: { __typename?: 'SessionMetadaModel', ip: string, location: { __typename?: 'LocationModel', city: string, country: string, latidute: number, longitude: number }, device: { __typename?: 'DeviceModel', os?: string | null, browser?: string | null, type?: string | null } } }> };

export type FindSessionsByUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type FindSessionsByUsersQuery = { __typename?: 'Query', findSessions: Array<{ __typename?: 'SessionModel', id: string, userId: string, createdAt: string, metadata: { __typename?: 'SessionMetadaModel', ip: string, location: { __typename?: 'LocationModel', city: string, country: string, latidute: number, longitude: number }, device: { __typename?: 'DeviceModel', os?: string | null, browser?: string | null, type?: string | null } } }> };

export type FindAllOwnProcessQueryVariables = Exact<{
  data: ListProcessesInput;
}>;


export type FindAllOwnProcessQuery = { __typename?: 'Query', findAllOwnProcesses: { __typename?: 'ProcessListModel', total: number, pages: number, currentPage: number, hasNext: boolean, hasPrev: boolean, data: Array<{ __typename?: 'ProcessModel', id: string, owner?: string | null, type: ProcessType, status: Status, createdAt: any, finishedAt?: any | null, user: { __typename?: 'UserModel', id: string, username: string, displayName: string, permissions: Array<Permission>, isTotpEnabled: boolean, isSuperUser: boolean, isBlocked: boolean, createdAt: any, updatedAt: any } }> } };

export type FindAllProcessQueryVariables = Exact<{
  data: ListProcessesInput;
}>;


export type FindAllProcessQuery = { __typename?: 'Query', findAllProcesses: { __typename?: 'ProcessListModel', total: number, pages: number, currentPage: number, hasNext: boolean, hasPrev: boolean, data: Array<{ __typename?: 'ProcessModel', id: string, owner?: string | null, type: ProcessType, status: Status, createdAt: any, finishedAt?: any | null, user: { __typename?: 'UserModel', id: string, username: string, displayName: string, permissions: Array<Permission>, isTotpEnabled: boolean, isSuperUser: boolean, isBlocked: boolean, createdAt: any, updatedAt: any } }> } };

export type FindDmsuByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindDmsuByIdQuery = { __typename?: 'Query', findDmsuById: { __typename?: 'DmsuProcessModel', stage: DmsuStage, errorMessage?: string | null, isAi: boolean, process: { __typename?: 'ProcessModel', id: string, owner?: string | null, type: ProcessType, status: Status, createdAt: any, finishedAt?: any | null, user: { __typename?: 'UserModel', id: string, username: string, displayName: string } }, personInfoFile: { __typename?: 'StorageModel', id: string, inputFilename: string, outputFilename?: string | null, extension: string, size: number }, withoutWMFile?: { __typename?: 'StorageModel', id: string, inputFilename: string, outputFilename?: string | null, extension: string, size: number } | null, resultFile?: { __typename?: 'StorageModel', id: string, inputFilename: string, outputFilename?: string | null, extension: string, size: number } | null } };

export type FindErdByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindErdByIdQuery = { __typename?: 'Query', findErdById: { __typename?: 'ErdProcessModel', stage: ErdStage, errorMessage?: string | null, isAi: boolean, process: { __typename?: 'ProcessModel', id: string, owner?: string | null, type: ProcessType, status: Status, createdAt: any, finishedAt?: any | null, user: { __typename?: 'UserModel', id: string, username: string, displayName: string } }, acceptedInputFile?: { __typename?: 'StorageModel', id: string, inputFilename: string, outputFilename?: string | null, extension: string, size: number } | null, grantedInputFile?: { __typename?: 'StorageModel', id: string, inputFilename: string, outputFilename?: string | null, extension: string, size: number } | null, resultFile?: { __typename?: 'StorageModel', id: string, inputFilename: string, outputFilename?: string | null, extension: string, size: number } | null } };

export type FindHstsMvsByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindHstsMvsByIdQuery = { __typename?: 'Query', findHstsMvsById: { __typename?: 'HstsMvsProcessModel', stage: HstsMvsStage, errorMessage?: string | null, isAi: boolean, process: { __typename?: 'ProcessModel', id: string, owner?: string | null, type: ProcessType, status: Status, createdAt: any, finishedAt?: any | null, user: { __typename?: 'UserModel', id: string, username: string, displayName: string } }, driverLicenseFile?: { __typename?: 'StorageModel', id: string, inputFilename: string, outputFilename?: string | null, extension: string, size: number } | null, carInfoFile: { __typename?: 'StorageModel', id: string, inputFilename: string, outputFilename?: string | null, extension: string, size: number }, resultFile?: { __typename?: 'StorageModel', id: string, inputFilename: string, outputFilename?: string | null, extension: string, size: number } | null } };

export type FindPfuByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindPfuByIdQuery = { __typename?: 'Query', findPfuById: { __typename?: 'PfuProcessModel', stage: PfuStage, errorMessage?: string | null, isAi: boolean, process: { __typename?: 'ProcessModel', id: string, owner?: string | null, type: ProcessType, status: Status, createdAt: any, finishedAt?: any | null, user: { __typename?: 'UserModel', id: string, username: string, displayName: string } }, inputFile: { __typename?: 'StorageModel', id: string, inputFilename: string, outputFilename?: string | null, extension: string, size: number }, resultFile?: { __typename?: 'StorageModel', id: string, inputFilename: string, outputFilename?: string | null, extension: string, size: number } | null } };

export type GenerateTotpSecretQueryVariables = Exact<{ [key: string]: never; }>;


export type GenerateTotpSecretQuery = { __typename?: 'Query', generateTotpSecret: { __typename?: 'TotpModel', qrcodeUrl: string, secret: string } };


export const ChangeUserPasswordDocument = gql`
    mutation ChangeUserPassword($data: UpdateUserPasswordInput!) {
  updatePasswordUser(data: $data)
}
    `;
export type ChangeUserPasswordMutationFn = Apollo.MutationFunction<ChangeUserPasswordMutation, ChangeUserPasswordMutationVariables>;

/**
 * __useChangeUserPasswordMutation__
 *
 * To run a mutation, you first call `useChangeUserPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeUserPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeUserPasswordMutation, { data, loading, error }] = useChangeUserPasswordMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useChangeUserPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangeUserPasswordMutation, ChangeUserPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeUserPasswordMutation, ChangeUserPasswordMutationVariables>(ChangeUserPasswordDocument, options);
      }
export type ChangeUserPasswordMutationHookResult = ReturnType<typeof useChangeUserPasswordMutation>;
export type ChangeUserPasswordMutationResult = Apollo.MutationResult<ChangeUserPasswordMutation>;
export type ChangeUserPasswordMutationOptions = Apollo.BaseMutationOptions<ChangeUserPasswordMutation, ChangeUserPasswordMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($data: CreateUserInput!) {
  createUser(data: $data)
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const ResetUserPasswordDocument = gql`
    mutation ResetUserPassword($data: ResetUserPasswordInput!) {
  resetPasswordUser(data: $data)
}
    `;
export type ResetUserPasswordMutationFn = Apollo.MutationFunction<ResetUserPasswordMutation, ResetUserPasswordMutationVariables>;

/**
 * __useResetUserPasswordMutation__
 *
 * To run a mutation, you first call `useResetUserPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetUserPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetUserPasswordMutation, { data, loading, error }] = useResetUserPasswordMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useResetUserPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetUserPasswordMutation, ResetUserPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetUserPasswordMutation, ResetUserPasswordMutationVariables>(ResetUserPasswordDocument, options);
      }
export type ResetUserPasswordMutationHookResult = ReturnType<typeof useResetUserPasswordMutation>;
export type ResetUserPasswordMutationResult = Apollo.MutationResult<ResetUserPasswordMutation>;
export type ResetUserPasswordMutationOptions = Apollo.BaseMutationOptions<ResetUserPasswordMutation, ResetUserPasswordMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($data: UpdateUserInput!) {
  updateUser(data: $data)
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const ClearSessionCookieDocument = gql`
    mutation ClearSessionCookie {
  clearSessionCookie
}
    `;
export type ClearSessionCookieMutationFn = Apollo.MutationFunction<ClearSessionCookieMutation, ClearSessionCookieMutationVariables>;

/**
 * __useClearSessionCookieMutation__
 *
 * To run a mutation, you first call `useClearSessionCookieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClearSessionCookieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clearSessionCookieMutation, { data, loading, error }] = useClearSessionCookieMutation({
 *   variables: {
 *   },
 * });
 */
export function useClearSessionCookieMutation(baseOptions?: Apollo.MutationHookOptions<ClearSessionCookieMutation, ClearSessionCookieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ClearSessionCookieMutation, ClearSessionCookieMutationVariables>(ClearSessionCookieDocument, options);
      }
export type ClearSessionCookieMutationHookResult = ReturnType<typeof useClearSessionCookieMutation>;
export type ClearSessionCookieMutationResult = Apollo.MutationResult<ClearSessionCookieMutation>;
export type ClearSessionCookieMutationOptions = Apollo.BaseMutationOptions<ClearSessionCookieMutation, ClearSessionCookieMutationVariables>;
export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data)
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RemoveSessionDocument = gql`
    mutation RemoveSession($id: String!) {
  removeSession(id: $id)
}
    `;
export type RemoveSessionMutationFn = Apollo.MutationFunction<RemoveSessionMutation, RemoveSessionMutationVariables>;

/**
 * __useRemoveSessionMutation__
 *
 * To run a mutation, you first call `useRemoveSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeSessionMutation, { data, loading, error }] = useRemoveSessionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveSessionMutation(baseOptions?: Apollo.MutationHookOptions<RemoveSessionMutation, RemoveSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveSessionMutation, RemoveSessionMutationVariables>(RemoveSessionDocument, options);
      }
export type RemoveSessionMutationHookResult = ReturnType<typeof useRemoveSessionMutation>;
export type RemoveSessionMutationResult = Apollo.MutationResult<RemoveSessionMutation>;
export type RemoveSessionMutationOptions = Apollo.BaseMutationOptions<RemoveSessionMutation, RemoveSessionMutationVariables>;
export const CreateDmsuProcessDocument = gql`
    mutation CreateDmsuProcess($personInfoFile: Upload!, $isAi: Boolean) {
  createDmsuProcess(personInfoFile: $personInfoFile, isAi: $isAi)
}
    `;
export type CreateDmsuProcessMutationFn = Apollo.MutationFunction<CreateDmsuProcessMutation, CreateDmsuProcessMutationVariables>;

/**
 * __useCreateDmsuProcessMutation__
 *
 * To run a mutation, you first call `useCreateDmsuProcessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDmsuProcessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDmsuProcessMutation, { data, loading, error }] = useCreateDmsuProcessMutation({
 *   variables: {
 *      personInfoFile: // value for 'personInfoFile'
 *      isAi: // value for 'isAi'
 *   },
 * });
 */
export function useCreateDmsuProcessMutation(baseOptions?: Apollo.MutationHookOptions<CreateDmsuProcessMutation, CreateDmsuProcessMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDmsuProcessMutation, CreateDmsuProcessMutationVariables>(CreateDmsuProcessDocument, options);
      }
export type CreateDmsuProcessMutationHookResult = ReturnType<typeof useCreateDmsuProcessMutation>;
export type CreateDmsuProcessMutationResult = Apollo.MutationResult<CreateDmsuProcessMutation>;
export type CreateDmsuProcessMutationOptions = Apollo.BaseMutationOptions<CreateDmsuProcessMutation, CreateDmsuProcessMutationVariables>;
export const CreateErdProcessDocument = gql`
    mutation CreateErdProcess($grantedInputFile: Upload, $acceptedInputFile: Upload, $isAi: Boolean) {
  createErdProcess(
    grantedInputFile: $grantedInputFile
    acceptedInputFile: $acceptedInputFile
    isAi: $isAi
  )
}
    `;
export type CreateErdProcessMutationFn = Apollo.MutationFunction<CreateErdProcessMutation, CreateErdProcessMutationVariables>;

/**
 * __useCreateErdProcessMutation__
 *
 * To run a mutation, you first call `useCreateErdProcessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateErdProcessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createErdProcessMutation, { data, loading, error }] = useCreateErdProcessMutation({
 *   variables: {
 *      grantedInputFile: // value for 'grantedInputFile'
 *      acceptedInputFile: // value for 'acceptedInputFile'
 *      isAi: // value for 'isAi'
 *   },
 * });
 */
export function useCreateErdProcessMutation(baseOptions?: Apollo.MutationHookOptions<CreateErdProcessMutation, CreateErdProcessMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateErdProcessMutation, CreateErdProcessMutationVariables>(CreateErdProcessDocument, options);
      }
export type CreateErdProcessMutationHookResult = ReturnType<typeof useCreateErdProcessMutation>;
export type CreateErdProcessMutationResult = Apollo.MutationResult<CreateErdProcessMutation>;
export type CreateErdProcessMutationOptions = Apollo.BaseMutationOptions<CreateErdProcessMutation, CreateErdProcessMutationVariables>;
export const CreateHstsMvsProcessDocument = gql`
    mutation CreateHstsMvsProcess($driverLicenseFile: Upload, $carInfoFile: Upload!, $isAi: Boolean) {
  createHstsMvsProcess(
    driverLicenseFile: $driverLicenseFile
    carInfoFile: $carInfoFile
    isAi: $isAi
  )
}
    `;
export type CreateHstsMvsProcessMutationFn = Apollo.MutationFunction<CreateHstsMvsProcessMutation, CreateHstsMvsProcessMutationVariables>;

/**
 * __useCreateHstsMvsProcessMutation__
 *
 * To run a mutation, you first call `useCreateHstsMvsProcessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHstsMvsProcessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHstsMvsProcessMutation, { data, loading, error }] = useCreateHstsMvsProcessMutation({
 *   variables: {
 *      driverLicenseFile: // value for 'driverLicenseFile'
 *      carInfoFile: // value for 'carInfoFile'
 *      isAi: // value for 'isAi'
 *   },
 * });
 */
export function useCreateHstsMvsProcessMutation(baseOptions?: Apollo.MutationHookOptions<CreateHstsMvsProcessMutation, CreateHstsMvsProcessMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateHstsMvsProcessMutation, CreateHstsMvsProcessMutationVariables>(CreateHstsMvsProcessDocument, options);
      }
export type CreateHstsMvsProcessMutationHookResult = ReturnType<typeof useCreateHstsMvsProcessMutation>;
export type CreateHstsMvsProcessMutationResult = Apollo.MutationResult<CreateHstsMvsProcessMutation>;
export type CreateHstsMvsProcessMutationOptions = Apollo.BaseMutationOptions<CreateHstsMvsProcessMutation, CreateHstsMvsProcessMutationVariables>;
export const CreatePfuProcessDocument = gql`
    mutation CreatePfuProcess($inputFile: Upload!, $isAi: Boolean) {
  createPfuProcess(inputFile: $inputFile, isAi: $isAi)
}
    `;
export type CreatePfuProcessMutationFn = Apollo.MutationFunction<CreatePfuProcessMutation, CreatePfuProcessMutationVariables>;

/**
 * __useCreatePfuProcessMutation__
 *
 * To run a mutation, you first call `useCreatePfuProcessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePfuProcessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPfuProcessMutation, { data, loading, error }] = useCreatePfuProcessMutation({
 *   variables: {
 *      inputFile: // value for 'inputFile'
 *      isAi: // value for 'isAi'
 *   },
 * });
 */
export function useCreatePfuProcessMutation(baseOptions?: Apollo.MutationHookOptions<CreatePfuProcessMutation, CreatePfuProcessMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePfuProcessMutation, CreatePfuProcessMutationVariables>(CreatePfuProcessDocument, options);
      }
export type CreatePfuProcessMutationHookResult = ReturnType<typeof useCreatePfuProcessMutation>;
export type CreatePfuProcessMutationResult = Apollo.MutationResult<CreatePfuProcessMutation>;
export type CreatePfuProcessMutationOptions = Apollo.BaseMutationOptions<CreatePfuProcessMutation, CreatePfuProcessMutationVariables>;
export const EnableTotpDocument = gql`
    mutation EnableTotp($data: EnableTotpInput!) {
  enableTotp(data: $data)
}
    `;
export type EnableTotpMutationFn = Apollo.MutationFunction<EnableTotpMutation, EnableTotpMutationVariables>;

/**
 * __useEnableTotpMutation__
 *
 * To run a mutation, you first call `useEnableTotpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableTotpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableTotpMutation, { data, loading, error }] = useEnableTotpMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEnableTotpMutation(baseOptions?: Apollo.MutationHookOptions<EnableTotpMutation, EnableTotpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EnableTotpMutation, EnableTotpMutationVariables>(EnableTotpDocument, options);
      }
export type EnableTotpMutationHookResult = ReturnType<typeof useEnableTotpMutation>;
export type EnableTotpMutationResult = Apollo.MutationResult<EnableTotpMutation>;
export type EnableTotpMutationOptions = Apollo.BaseMutationOptions<EnableTotpMutation, EnableTotpMutationVariables>;
export const FindAllUsersDocument = gql`
    query FindAllUsers($data: ListUsersInput!) {
  findAllUsers(data: $data) {
    data {
      id
      username
      displayName
      permissions
      isTotpEnabled
      isSuperUser
      isBlocked
      createdAt
      isTotpEnabled
      updatedAt
    }
    total
    pages
    currentPage
    hasNext
    hasPrev
  }
}
    `;

/**
 * __useFindAllUsersQuery__
 *
 * To run a query within a React component, call `useFindAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllUsersQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useFindAllUsersQuery(baseOptions: Apollo.QueryHookOptions<FindAllUsersQuery, FindAllUsersQueryVariables> & ({ variables: FindAllUsersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllUsersQuery, FindAllUsersQueryVariables>(FindAllUsersDocument, options);
      }
export function useFindAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllUsersQuery, FindAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllUsersQuery, FindAllUsersQueryVariables>(FindAllUsersDocument, options);
        }
export function useFindAllUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindAllUsersQuery, FindAllUsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAllUsersQuery, FindAllUsersQueryVariables>(FindAllUsersDocument, options);
        }
export type FindAllUsersQueryHookResult = ReturnType<typeof useFindAllUsersQuery>;
export type FindAllUsersLazyQueryHookResult = ReturnType<typeof useFindAllUsersLazyQuery>;
export type FindAllUsersSuspenseQueryHookResult = ReturnType<typeof useFindAllUsersSuspenseQuery>;
export type FindAllUsersQueryResult = Apollo.QueryResult<FindAllUsersQuery, FindAllUsersQueryVariables>;
export const FindMeDocument = gql`
    query FindMe {
  findMe {
    id
    username
    displayName
    permissions
    isTotpEnabled
    isSuperUser
    isBlocked
    createdAt
    isTotpEnabled
    updatedAt
  }
}
    `;

/**
 * __useFindMeQuery__
 *
 * To run a query within a React component, call `useFindMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindMeQuery(baseOptions?: Apollo.QueryHookOptions<FindMeQuery, FindMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindMeQuery, FindMeQueryVariables>(FindMeDocument, options);
      }
export function useFindMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMeQuery, FindMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindMeQuery, FindMeQueryVariables>(FindMeDocument, options);
        }
export function useFindMeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindMeQuery, FindMeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindMeQuery, FindMeQueryVariables>(FindMeDocument, options);
        }
export type FindMeQueryHookResult = ReturnType<typeof useFindMeQuery>;
export type FindMeLazyQueryHookResult = ReturnType<typeof useFindMeLazyQuery>;
export type FindMeSuspenseQueryHookResult = ReturnType<typeof useFindMeSuspenseQuery>;
export type FindMeQueryResult = Apollo.QueryResult<FindMeQuery, FindMeQueryVariables>;
export const FindUserByIdDocument = gql`
    query FindUserById($id: String!) {
  findUserById(id: $id) {
    id
    username
    displayName
    permissions
    isTotpEnabled
    isSuperUser
    isBlocked
    createdAt
    isTotpEnabled
    updatedAt
  }
}
    `;

/**
 * __useFindUserByIdQuery__
 *
 * To run a query within a React component, call `useFindUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindUserByIdQuery(baseOptions: Apollo.QueryHookOptions<FindUserByIdQuery, FindUserByIdQueryVariables> & ({ variables: FindUserByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserByIdQuery, FindUserByIdQueryVariables>(FindUserByIdDocument, options);
      }
export function useFindUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserByIdQuery, FindUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserByIdQuery, FindUserByIdQueryVariables>(FindUserByIdDocument, options);
        }
export function useFindUserByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindUserByIdQuery, FindUserByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindUserByIdQuery, FindUserByIdQueryVariables>(FindUserByIdDocument, options);
        }
export type FindUserByIdQueryHookResult = ReturnType<typeof useFindUserByIdQuery>;
export type FindUserByIdLazyQueryHookResult = ReturnType<typeof useFindUserByIdLazyQuery>;
export type FindUserByIdSuspenseQueryHookResult = ReturnType<typeof useFindUserByIdSuspenseQuery>;
export type FindUserByIdQueryResult = Apollo.QueryResult<FindUserByIdQuery, FindUserByIdQueryVariables>;
export const FindCurrentSessionDocument = gql`
    query FindCurrentSession {
  findCurrentSession {
    id
    userId
    createdAt
    metadata {
      location {
        city
        country
        latidute
        longitude
      }
      device {
        os
        browser
        type
      }
      ip
    }
  }
}
    `;

/**
 * __useFindCurrentSessionQuery__
 *
 * To run a query within a React component, call `useFindCurrentSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCurrentSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCurrentSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindCurrentSessionQuery(baseOptions?: Apollo.QueryHookOptions<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>(FindCurrentSessionDocument, options);
      }
export function useFindCurrentSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>(FindCurrentSessionDocument, options);
        }
export function useFindCurrentSessionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>(FindCurrentSessionDocument, options);
        }
export type FindCurrentSessionQueryHookResult = ReturnType<typeof useFindCurrentSessionQuery>;
export type FindCurrentSessionLazyQueryHookResult = ReturnType<typeof useFindCurrentSessionLazyQuery>;
export type FindCurrentSessionSuspenseQueryHookResult = ReturnType<typeof useFindCurrentSessionSuspenseQuery>;
export type FindCurrentSessionQueryResult = Apollo.QueryResult<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>;
export const FindSessionsDocument = gql`
    query FindSessions {
  findSessions {
    id
    userId
    createdAt
    metadata {
      location {
        city
        country
        latidute
        longitude
      }
      device {
        os
        browser
        type
      }
      ip
    }
  }
}
    `;

/**
 * __useFindSessionsQuery__
 *
 * To run a query within a React component, call `useFindSessionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSessionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSessionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindSessionsQuery(baseOptions?: Apollo.QueryHookOptions<FindSessionsQuery, FindSessionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSessionsQuery, FindSessionsQueryVariables>(FindSessionsDocument, options);
      }
export function useFindSessionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSessionsQuery, FindSessionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSessionsQuery, FindSessionsQueryVariables>(FindSessionsDocument, options);
        }
export function useFindSessionsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindSessionsQuery, FindSessionsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindSessionsQuery, FindSessionsQueryVariables>(FindSessionsDocument, options);
        }
export type FindSessionsQueryHookResult = ReturnType<typeof useFindSessionsQuery>;
export type FindSessionsLazyQueryHookResult = ReturnType<typeof useFindSessionsLazyQuery>;
export type FindSessionsSuspenseQueryHookResult = ReturnType<typeof useFindSessionsSuspenseQuery>;
export type FindSessionsQueryResult = Apollo.QueryResult<FindSessionsQuery, FindSessionsQueryVariables>;
export const FindSessionsByIdDocument = gql`
    query FindSessionsById($id: String!) {
  findSessionsById(id: $id) {
    id
    userId
    createdAt
    metadata {
      location {
        city
        country
        latidute
        longitude
      }
      device {
        os
        browser
        type
      }
      ip
    }
  }
}
    `;

/**
 * __useFindSessionsByIdQuery__
 *
 * To run a query within a React component, call `useFindSessionsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSessionsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSessionsByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindSessionsByIdQuery(baseOptions: Apollo.QueryHookOptions<FindSessionsByIdQuery, FindSessionsByIdQueryVariables> & ({ variables: FindSessionsByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSessionsByIdQuery, FindSessionsByIdQueryVariables>(FindSessionsByIdDocument, options);
      }
export function useFindSessionsByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSessionsByIdQuery, FindSessionsByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSessionsByIdQuery, FindSessionsByIdQueryVariables>(FindSessionsByIdDocument, options);
        }
export function useFindSessionsByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindSessionsByIdQuery, FindSessionsByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindSessionsByIdQuery, FindSessionsByIdQueryVariables>(FindSessionsByIdDocument, options);
        }
export type FindSessionsByIdQueryHookResult = ReturnType<typeof useFindSessionsByIdQuery>;
export type FindSessionsByIdLazyQueryHookResult = ReturnType<typeof useFindSessionsByIdLazyQuery>;
export type FindSessionsByIdSuspenseQueryHookResult = ReturnType<typeof useFindSessionsByIdSuspenseQuery>;
export type FindSessionsByIdQueryResult = Apollo.QueryResult<FindSessionsByIdQuery, FindSessionsByIdQueryVariables>;
export const FindSessionsByUsersDocument = gql`
    query FindSessionsByUsers {
  findSessions {
    id
    userId
    createdAt
    metadata {
      location {
        city
        country
        latidute
        longitude
      }
      device {
        os
        browser
        type
      }
      ip
    }
  }
}
    `;

/**
 * __useFindSessionsByUsersQuery__
 *
 * To run a query within a React component, call `useFindSessionsByUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSessionsByUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSessionsByUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindSessionsByUsersQuery(baseOptions?: Apollo.QueryHookOptions<FindSessionsByUsersQuery, FindSessionsByUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSessionsByUsersQuery, FindSessionsByUsersQueryVariables>(FindSessionsByUsersDocument, options);
      }
export function useFindSessionsByUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSessionsByUsersQuery, FindSessionsByUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSessionsByUsersQuery, FindSessionsByUsersQueryVariables>(FindSessionsByUsersDocument, options);
        }
export function useFindSessionsByUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindSessionsByUsersQuery, FindSessionsByUsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindSessionsByUsersQuery, FindSessionsByUsersQueryVariables>(FindSessionsByUsersDocument, options);
        }
export type FindSessionsByUsersQueryHookResult = ReturnType<typeof useFindSessionsByUsersQuery>;
export type FindSessionsByUsersLazyQueryHookResult = ReturnType<typeof useFindSessionsByUsersLazyQuery>;
export type FindSessionsByUsersSuspenseQueryHookResult = ReturnType<typeof useFindSessionsByUsersSuspenseQuery>;
export type FindSessionsByUsersQueryResult = Apollo.QueryResult<FindSessionsByUsersQuery, FindSessionsByUsersQueryVariables>;
export const FindAllOwnProcessDocument = gql`
    query FindAllOwnProcess($data: ListProcessesInput!) {
  findAllOwnProcesses(data: $data) {
    data {
      id
      user {
        id
        username
        displayName
        permissions
        isTotpEnabled
        isSuperUser
        isBlocked
        createdAt
        isTotpEnabled
        updatedAt
      }
      owner
      type
      status
      createdAt
      finishedAt
    }
    total
    pages
    currentPage
    hasNext
    hasPrev
  }
}
    `;

/**
 * __useFindAllOwnProcessQuery__
 *
 * To run a query within a React component, call `useFindAllOwnProcessQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllOwnProcessQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllOwnProcessQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useFindAllOwnProcessQuery(baseOptions: Apollo.QueryHookOptions<FindAllOwnProcessQuery, FindAllOwnProcessQueryVariables> & ({ variables: FindAllOwnProcessQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllOwnProcessQuery, FindAllOwnProcessQueryVariables>(FindAllOwnProcessDocument, options);
      }
export function useFindAllOwnProcessLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllOwnProcessQuery, FindAllOwnProcessQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllOwnProcessQuery, FindAllOwnProcessQueryVariables>(FindAllOwnProcessDocument, options);
        }
export function useFindAllOwnProcessSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindAllOwnProcessQuery, FindAllOwnProcessQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAllOwnProcessQuery, FindAllOwnProcessQueryVariables>(FindAllOwnProcessDocument, options);
        }
export type FindAllOwnProcessQueryHookResult = ReturnType<typeof useFindAllOwnProcessQuery>;
export type FindAllOwnProcessLazyQueryHookResult = ReturnType<typeof useFindAllOwnProcessLazyQuery>;
export type FindAllOwnProcessSuspenseQueryHookResult = ReturnType<typeof useFindAllOwnProcessSuspenseQuery>;
export type FindAllOwnProcessQueryResult = Apollo.QueryResult<FindAllOwnProcessQuery, FindAllOwnProcessQueryVariables>;
export const FindAllProcessDocument = gql`
    query FindAllProcess($data: ListProcessesInput!) {
  findAllProcesses(data: $data) {
    data {
      id
      user {
        id
        username
        displayName
        permissions
        isTotpEnabled
        isSuperUser
        isBlocked
        createdAt
        isTotpEnabled
        updatedAt
      }
      owner
      type
      status
      createdAt
      finishedAt
    }
    total
    pages
    currentPage
    hasNext
    hasPrev
  }
}
    `;

/**
 * __useFindAllProcessQuery__
 *
 * To run a query within a React component, call `useFindAllProcessQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllProcessQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllProcessQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useFindAllProcessQuery(baseOptions: Apollo.QueryHookOptions<FindAllProcessQuery, FindAllProcessQueryVariables> & ({ variables: FindAllProcessQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllProcessQuery, FindAllProcessQueryVariables>(FindAllProcessDocument, options);
      }
export function useFindAllProcessLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllProcessQuery, FindAllProcessQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllProcessQuery, FindAllProcessQueryVariables>(FindAllProcessDocument, options);
        }
export function useFindAllProcessSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindAllProcessQuery, FindAllProcessQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAllProcessQuery, FindAllProcessQueryVariables>(FindAllProcessDocument, options);
        }
export type FindAllProcessQueryHookResult = ReturnType<typeof useFindAllProcessQuery>;
export type FindAllProcessLazyQueryHookResult = ReturnType<typeof useFindAllProcessLazyQuery>;
export type FindAllProcessSuspenseQueryHookResult = ReturnType<typeof useFindAllProcessSuspenseQuery>;
export type FindAllProcessQueryResult = Apollo.QueryResult<FindAllProcessQuery, FindAllProcessQueryVariables>;
export const FindDmsuByIdDocument = gql`
    query FindDmsuById($id: String!) {
  findDmsuById(id: $id) {
    process {
      id
      user {
        id
        username
        displayName
      }
      owner
      type
      status
      createdAt
      finishedAt
    }
    personInfoFile {
      id
      inputFilename
      outputFilename
      extension
      size
    }
    withoutWMFile {
      id
      inputFilename
      outputFilename
      extension
      size
    }
    resultFile {
      id
      inputFilename
      outputFilename
      extension
      size
    }
    stage
    errorMessage
    isAi
  }
}
    `;

/**
 * __useFindDmsuByIdQuery__
 *
 * To run a query within a React component, call `useFindDmsuByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindDmsuByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindDmsuByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindDmsuByIdQuery(baseOptions: Apollo.QueryHookOptions<FindDmsuByIdQuery, FindDmsuByIdQueryVariables> & ({ variables: FindDmsuByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindDmsuByIdQuery, FindDmsuByIdQueryVariables>(FindDmsuByIdDocument, options);
      }
export function useFindDmsuByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindDmsuByIdQuery, FindDmsuByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindDmsuByIdQuery, FindDmsuByIdQueryVariables>(FindDmsuByIdDocument, options);
        }
export function useFindDmsuByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindDmsuByIdQuery, FindDmsuByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindDmsuByIdQuery, FindDmsuByIdQueryVariables>(FindDmsuByIdDocument, options);
        }
export type FindDmsuByIdQueryHookResult = ReturnType<typeof useFindDmsuByIdQuery>;
export type FindDmsuByIdLazyQueryHookResult = ReturnType<typeof useFindDmsuByIdLazyQuery>;
export type FindDmsuByIdSuspenseQueryHookResult = ReturnType<typeof useFindDmsuByIdSuspenseQuery>;
export type FindDmsuByIdQueryResult = Apollo.QueryResult<FindDmsuByIdQuery, FindDmsuByIdQueryVariables>;
export const FindErdByIdDocument = gql`
    query FindErdById($id: String!) {
  findErdById(id: $id) {
    process {
      id
      user {
        id
        username
        displayName
      }
      owner
      type
      status
      createdAt
      finishedAt
    }
    acceptedInputFile {
      id
      inputFilename
      outputFilename
      extension
      size
    }
    grantedInputFile {
      id
      inputFilename
      outputFilename
      extension
      size
    }
    resultFile {
      id
      inputFilename
      outputFilename
      extension
      size
    }
    stage
    errorMessage
    isAi
  }
}
    `;

/**
 * __useFindErdByIdQuery__
 *
 * To run a query within a React component, call `useFindErdByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindErdByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindErdByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindErdByIdQuery(baseOptions: Apollo.QueryHookOptions<FindErdByIdQuery, FindErdByIdQueryVariables> & ({ variables: FindErdByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindErdByIdQuery, FindErdByIdQueryVariables>(FindErdByIdDocument, options);
      }
export function useFindErdByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindErdByIdQuery, FindErdByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindErdByIdQuery, FindErdByIdQueryVariables>(FindErdByIdDocument, options);
        }
export function useFindErdByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindErdByIdQuery, FindErdByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindErdByIdQuery, FindErdByIdQueryVariables>(FindErdByIdDocument, options);
        }
export type FindErdByIdQueryHookResult = ReturnType<typeof useFindErdByIdQuery>;
export type FindErdByIdLazyQueryHookResult = ReturnType<typeof useFindErdByIdLazyQuery>;
export type FindErdByIdSuspenseQueryHookResult = ReturnType<typeof useFindErdByIdSuspenseQuery>;
export type FindErdByIdQueryResult = Apollo.QueryResult<FindErdByIdQuery, FindErdByIdQueryVariables>;
export const FindHstsMvsByIdDocument = gql`
    query FindHstsMvsById($id: String!) {
  findHstsMvsById(id: $id) {
    process {
      id
      user {
        id
        username
        displayName
      }
      owner
      type
      status
      createdAt
      finishedAt
    }
    driverLicenseFile {
      id
      inputFilename
      outputFilename
      extension
      size
    }
    carInfoFile {
      id
      inputFilename
      outputFilename
      extension
      size
    }
    resultFile {
      id
      inputFilename
      outputFilename
      extension
      size
    }
    stage
    errorMessage
    isAi
  }
}
    `;

/**
 * __useFindHstsMvsByIdQuery__
 *
 * To run a query within a React component, call `useFindHstsMvsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindHstsMvsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindHstsMvsByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindHstsMvsByIdQuery(baseOptions: Apollo.QueryHookOptions<FindHstsMvsByIdQuery, FindHstsMvsByIdQueryVariables> & ({ variables: FindHstsMvsByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindHstsMvsByIdQuery, FindHstsMvsByIdQueryVariables>(FindHstsMvsByIdDocument, options);
      }
export function useFindHstsMvsByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindHstsMvsByIdQuery, FindHstsMvsByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindHstsMvsByIdQuery, FindHstsMvsByIdQueryVariables>(FindHstsMvsByIdDocument, options);
        }
export function useFindHstsMvsByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindHstsMvsByIdQuery, FindHstsMvsByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindHstsMvsByIdQuery, FindHstsMvsByIdQueryVariables>(FindHstsMvsByIdDocument, options);
        }
export type FindHstsMvsByIdQueryHookResult = ReturnType<typeof useFindHstsMvsByIdQuery>;
export type FindHstsMvsByIdLazyQueryHookResult = ReturnType<typeof useFindHstsMvsByIdLazyQuery>;
export type FindHstsMvsByIdSuspenseQueryHookResult = ReturnType<typeof useFindHstsMvsByIdSuspenseQuery>;
export type FindHstsMvsByIdQueryResult = Apollo.QueryResult<FindHstsMvsByIdQuery, FindHstsMvsByIdQueryVariables>;
export const FindPfuByIdDocument = gql`
    query FindPfuById($id: String!) {
  findPfuById(id: $id) {
    process {
      id
      user {
        id
        username
        displayName
      }
      owner
      type
      status
      createdAt
      finishedAt
    }
    inputFile {
      id
      inputFilename
      outputFilename
      extension
      size
    }
    resultFile {
      id
      inputFilename
      outputFilename
      extension
      size
    }
    stage
    errorMessage
    isAi
  }
}
    `;

/**
 * __useFindPfuByIdQuery__
 *
 * To run a query within a React component, call `useFindPfuByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPfuByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPfuByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindPfuByIdQuery(baseOptions: Apollo.QueryHookOptions<FindPfuByIdQuery, FindPfuByIdQueryVariables> & ({ variables: FindPfuByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindPfuByIdQuery, FindPfuByIdQueryVariables>(FindPfuByIdDocument, options);
      }
export function useFindPfuByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPfuByIdQuery, FindPfuByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindPfuByIdQuery, FindPfuByIdQueryVariables>(FindPfuByIdDocument, options);
        }
export function useFindPfuByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindPfuByIdQuery, FindPfuByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindPfuByIdQuery, FindPfuByIdQueryVariables>(FindPfuByIdDocument, options);
        }
export type FindPfuByIdQueryHookResult = ReturnType<typeof useFindPfuByIdQuery>;
export type FindPfuByIdLazyQueryHookResult = ReturnType<typeof useFindPfuByIdLazyQuery>;
export type FindPfuByIdSuspenseQueryHookResult = ReturnType<typeof useFindPfuByIdSuspenseQuery>;
export type FindPfuByIdQueryResult = Apollo.QueryResult<FindPfuByIdQuery, FindPfuByIdQueryVariables>;
export const GenerateTotpSecretDocument = gql`
    query GenerateTotpSecret {
  generateTotpSecret {
    qrcodeUrl
    secret
  }
}
    `;

/**
 * __useGenerateTotpSecretQuery__
 *
 * To run a query within a React component, call `useGenerateTotpSecretQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenerateTotpSecretQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenerateTotpSecretQuery({
 *   variables: {
 *   },
 * });
 */
export function useGenerateTotpSecretQuery(baseOptions?: Apollo.QueryHookOptions<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>(GenerateTotpSecretDocument, options);
      }
export function useGenerateTotpSecretLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>(GenerateTotpSecretDocument, options);
        }
export function useGenerateTotpSecretSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>(GenerateTotpSecretDocument, options);
        }
export type GenerateTotpSecretQueryHookResult = ReturnType<typeof useGenerateTotpSecretQuery>;
export type GenerateTotpSecretLazyQueryHookResult = ReturnType<typeof useGenerateTotpSecretLazyQuery>;
export type GenerateTotpSecretSuspenseQueryHookResult = ReturnType<typeof useGenerateTotpSecretSuspenseQuery>;
export type GenerateTotpSecretQueryResult = Apollo.QueryResult<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>;