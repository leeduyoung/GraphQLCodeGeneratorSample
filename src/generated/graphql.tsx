export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
  _Any: any;
  _FieldSet: any;
};

export type ApiWeather = {
  __typename?: 'APIWeather';
  airQualityDesc: Scalars['String'];
  airQualityImage?: Maybe<ImageInfo>;
  airQualityType: ApiWeatherAirQualityType;
  cityName: Scalars['String'];
  conditionType: ApiWeatherConditionType;
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  image: ImageInfo;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  temperature: Scalars['Float'];
  updatedAt: Scalars['String'];
};

export enum ApiWeatherAirQualityType {
  Fair = 'FAIR',
  Good = 'GOOD',
  Moderate = 'MODERATE',
  Poor = 'POOR',
  Verypoor = 'VERYPOOR'
}

export enum ApiWeatherConditionType {
  Clear = 'CLEAR',
  Cloud = 'CLOUD',
  Rain = 'RAIN',
  Snow = 'SNOW'
}

export type ApiWeatherWhere = {
  langType?: InputMaybe<LangType>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type AccessLink = {
  __typename?: 'AccessLink';
  terminal: Scalars['String'];
  workspace: Scalars['String'];
};

export type AccountCode = {
  __typename?: 'AccountCode';
  code: Scalars['Int'];
  description: Scalars['String'];
  name: Scalars['String'];
};

export type AccountCodeConnection = {
  __typename?: 'AccountCodeConnection';
  description: Scalars['String'];
  groupCode: Scalars['Int'];
  groupName: Scalars['String'];
  nodes: Array<Maybe<AccountCode>>;
};

export enum AccountGenderType {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type AccountIsDuplicateUserEmailWhere = {
  provider: AccountProviderType;
  userEmail: Scalars['String'];
};

export type AccountIsDuplicateUserIdWhere = {
  userId: Scalars['String'];
};

export type AccountMember = {
  __typename?: 'AccountMember';
  accountCode: Scalars['Int'];
  accountCodeName: Scalars['String'];
  adminCode: Scalars['Int'];
  adminCodeName: Scalars['String'];
  createdAt: Scalars['String'];
  deletedAt: Scalars['String'];
  gender: AccountGenderType;
  id: Scalars['ID'];
  memberCode: Scalars['Int'];
  memberCodeName: Scalars['String'];
  provider: AccountProviderType;
  userEmail: Scalars['String'];
  userId: Scalars['String'];
  userName: Scalars['String'];
};

export type AccountMemberConnection = {
  __typename?: 'AccountMemberConnection';
  nodes: Array<Maybe<AccountMember>>;
  pageInfo: AccountPageInfo;
  totalCount: Scalars['Int'];
};

export enum AccountMemberConnectionFieldType {
  Id = 'ID',
  Provider = 'PROVIDER'
}

export type AccountMemberConnectionOrder = {
  direction?: InputMaybe<OrderDirectionType>;
  field?: InputMaybe<AccountMemberConnectionFieldType>;
};

export type AccountMemberConnectionWhere = {
  accountCode?: InputMaybe<Scalars['Int']>;
  field?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  keyword?: InputMaybe<Scalars['String']>;
  memberCode?: InputMaybe<Scalars['Int']>;
};

export type AccountMemberWhere = {
  memberId: Scalars['Int'];
};

export type AccountMethod = {
  __typename?: 'AccountMethod';
  code: Scalars['Int'];
  description: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  isUser: Scalars['Boolean'];
  name: Scalars['String'];
};

export type AccountMethodConnection = {
  __typename?: 'AccountMethodConnection';
  nodes: Array<Maybe<AccountMethodGroup>>;
};

export type AccountMethodGroup = {
  __typename?: 'AccountMethodGroup';
  description: Scalars['String'];
  groupCode: Scalars['Int'];
  groupName: Scalars['String'];
  nodes: Array<Maybe<AccountMethod>>;
};

export type AccountPageInfo = {
  __typename?: 'AccountPageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

export enum AccountProviderType {
  Facebook = 'FACEBOOK',
  Google = 'GOOGLE',
  Kakao = 'KAKAO',
  Locals = 'LOCALS',
  Naver = 'NAVER'
}

export type AccountSchool = {
  __typename?: 'AccountSchool';
  gubunName: Scalars['String'];
  id: Scalars['ID'];
  schoolAddress: Scalars['String'];
  schoolLink: Scalars['String'];
  schoolName: Scalars['String'];
  schoolRegion: Scalars['String'];
};

export type AccountSchoolConnection = {
  __typename?: 'AccountSchoolConnection';
  nodes: Array<Maybe<AccountSchool>>;
  pageInfo: AccountPageInfo;
  totalCount: Scalars['Int'];
};

export enum AccountSchoolConnectionFieldType {
  Gubun = 'GUBUN',
  Id = 'ID'
}

export type AccountSchoolConnectionOrder = {
  direction?: InputMaybe<OrderDirectionType>;
  field?: InputMaybe<AccountSchoolConnectionFieldType>;
};

export type AccountSchoolConnectionWhere = {
  field?: InputMaybe<Scalars['String']>;
  gubun?: InputMaybe<AccountSchoolGubunType>;
  keyword?: InputMaybe<Scalars['String']>;
  schoolRegion?: InputMaybe<Scalars['String']>;
};

export enum AccountSchoolGubunType {
  Elem = 'ELEM',
  High = 'HIGH',
  Midd = 'MIDD',
  Univ = 'UNIV'
}

export type AddClassroomLessonInput = {
  id: Scalars['ID'];
  lessonId: Scalars['String'];
  startTime: Scalars['String'];
  startType: ClassroomLessonStartType;
};

export type AddClassroomStudentInput = {
  classroomId: Scalars['String'];
  name: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type AirPollution = {
  __typename?: 'AirPollution';
  main: AirPollutionMain;
};

export type AirPollutionComponents = {
  __typename?: 'AirPollutionComponents';
  co: Scalars['Float'];
  nh3: Scalars['Float'];
  no: Scalars['Float'];
  no2: Scalars['Float'];
  o3: Scalars['Float'];
  pm2_5: Scalars['Float'];
  pm10: Scalars['Float'];
  so2: Scalars['Float'];
};

export type AirPollutionMain = {
  __typename?: 'AirPollutionMain';
  aqi: Scalars['Int'];
};

export type AppBanner = Node & {
  __typename?: 'AppBanner';
  id: Scalars['ID'];
  idx: Scalars['Int'];
  image: ImageInfo;
  openType: OpenType;
  subTitle: Scalars['String'];
  title: Scalars['String'];
  type: AppBannerType;
};

export type AppBannerConnection = {
  __typename?: 'AppBannerConnection';
  edges: Array<Maybe<AppBannerEdge>>;
  nodes: Array<Maybe<AppBanner>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum AppBannerConnectionField {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

export type AppBannerConnectionOrder = {
  direction?: InputMaybe<OrderDirectionType>;
  field: AppBannerConnectionField;
};

export type AppBannerConnectionWhere = {
  filter?: InputMaybe<Scalars['String']>;
  openType?: InputMaybe<OpenType>;
  type?: InputMaybe<AppBannerType>;
};

export type AppBannerEdge = {
  __typename?: 'AppBannerEdge';
  cursor: Scalars['String'];
  node: AppBanner;
};

export enum AppBannerType {
  Ads = 'ADS',
  Classroom = 'CLASSROOM',
  Curriculum = 'CURRICULUM',
  Faq = 'FAQ',
  Lesson = 'LESSON',
  Main = 'MAIN',
  Notice = 'NOTICE',
  Quiestion = 'QUIESTION'
}

export type AppBannerWhere = {
  id: Scalars['ID'];
};

export type AppGuide = {
  __typename?: 'AppGuide';
  brickpack: Array<AppGuideContent>;
  coding: Array<AppGuideContent>;
  freeCoding: Array<AppGuideContent>;
  main: Array<AppGuideContent>;
  project: Array<AppGuideContent>;
  uploadCodingTip: AppGuideContent;
};

export type AppGuideContent = {
  __typename?: 'AppGuideContent';
  image: ImageInfo;
};

export type AppGuideLanguage = {
  __typename?: 'AppGuideLanguage';
  cn: AppGuide;
  en: AppGuide;
  jp: AppGuide;
  ko: AppGuide;
};

export type AppInit = {
  __typename?: 'AppInit';
  bgAudioUrls: Array<Scalars['String']>;
  codingUrl: Scalars['String'];
  guideLanguage: AppGuideLanguage;
};

export type AppInitWhere = {
  serviceType?: InputMaybe<AppServiceType>;
};

export enum AppOsType {
  Android = 'ANDROID',
  Firmware = 'FIRMWARE',
  Ios = 'IOS'
}

export type AppProductBox = {
  __typename?: 'AppProductBox';
  idx: Scalars['Int'];
  products: Array<AppProductTemplate>;
  subTitle: Scalars['String'];
  templateType: AppProductTemplateType;
  title: Scalars['String'];
  titleDisplay: Scalars['Boolean'];
};

export type AppProductGroup = {
  __typename?: 'AppProductGroup';
  idx: Scalars['Int'];
  nodes: Array<AppProductBox>;
  subTitle: Scalars['String'];
  title: Scalars['String'];
  titleDisplay: Scalars['Boolean'];
  uiType: AppProductGroupUiType;
};

export enum AppProductGroupUiType {
  LinenoneBgnoneFit = 'LINENONE_BGNONE_FIT',
  LinenoneBgwhiteAll = 'LINENONE_BGWHITE_ALL',
  LineroundBgwhiteAll = 'LINEROUND_BGWHITE_ALL'
}

export type AppProductGroupsWhere = {
  langType: LangType;
};

export type AppProductTemplate = AppProductTemplateBigCard | AppProductTemplateMiddleCard | AppProductTemplateTwoButtonCard;

export type AppProductTemplateBigCard = {
  __typename?: 'AppProductTemplateBigCard';
  id: Scalars['ID'];
  idx: Scalars['Int'];
  image: ImageInfo;
  linkUrl: Scalars['String'];
  subTitle: Scalars['String'];
  title: Scalars['String'];
};

export type AppProductTemplateMiddleCard = {
  __typename?: 'AppProductTemplateMiddleCard';
  id: Scalars['ID'];
  idx: Scalars['Int'];
  image: ImageInfo;
  linkUrl: Scalars['String'];
  subTitle: Scalars['String'];
  title: Scalars['String'];
};

export type AppProductTemplateTwoButtonCard = {
  __typename?: 'AppProductTemplateTwoButtonCard';
  buttons: Array<ButtonInfo>;
  id: Scalars['ID'];
  idx: Scalars['Int'];
  image: ImageInfo;
  linkUrl: Scalars['String'];
  subTitle: Scalars['String'];
  title: Scalars['String'];
};

export enum AppProductTemplateType {
  BigNormalCard = 'BIG_NORMAL_CARD',
  Middle_2ButtonCard = 'MIDDLE_2BUTTON_CARD',
  MiddleNormalCard = 'MIDDLE_NORMAL_CARD'
}

export enum AppServiceType {
  CodeSketch = 'CODE_SKETCH',
  CodeSketchPlus = 'CODE_SKETCH_PLUS',
  ModiPlayPlus = 'MODI_PLAY_PLUS'
}

export type AppVersion = {
  __typename?: 'AppVersion';
  comment: Scalars['String'];
  downloadURL: Scalars['String'];
  isForceUpdate: Scalars['Boolean'];
  isUpdate: Scalars['Boolean'];
  version: Scalars['String'];
};

export type AppVersionWhere = {
  os: AppOsType;
  serviceType?: InputMaybe<AppServiceType>;
  version: Scalars['String'];
};

export enum AreaType {
  Mumbai = 'MUMBAI',
  Oregon = 'OREGON',
  Seoul = 'SEOUL',
  Tokyo = 'TOKYO'
}

export type Arg = {
  __typename?: 'Arg';
  name: Scalars['String'];
  type: Scalars['String'];
};

export type ArgInput = {
  name: Scalars['String'];
  type: Scalars['String'];
};

export type AuthAccountUserEmailInput = {
  userEmail: Scalars['String'];
};

export type AuthCheckAccountUserEmailInput = {
  authCode: Scalars['String'];
  id: Scalars['String'];
};

export type BoardCode = {
  __typename?: 'BoardCode';
  code: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
};

export type BoardCodeConnection = {
  __typename?: 'BoardCodeConnection';
  description?: Maybe<Scalars['String']>;
  groupCode: Scalars['Int'];
  groupName?: Maybe<Scalars['String']>;
  nodes?: Maybe<Array<BoardCode>>;
};

export type BoardCodeConnectionWhere = {
  code: Scalars['Int'];
  langType: LangType;
};

export enum BoardContentType {
  Data = 'DATA',
  Faq = 'FAQ',
  Notice = 'NOTICE'
}

export type BoardData = {
  __typename?: 'BoardData';
  content: Scalars['String'];
  createdAt: Scalars['String'];
  cursorInfo: CursorInfo;
  dataByLanguages: Array<BoardDataByLanguage>;
  files: Array<Maybe<BoardFile>>;
  id: Scalars['String'];
  isView: Scalars['Boolean'];
  /** @deprecated Use `dataByLanguages`. */
  languages: Array<BoardDataLanguage>;
  serviceType: BoardServiceType;
  title: Scalars['String'];
  viewCount: Scalars['Int'];
};

export type BoardDataByLanguage = {
  __typename?: 'BoardDataByLanguage';
  content: Scalars['String'];
  files: Array<Maybe<BoardFile>>;
  langType: LangType;
  title: Scalars['String'];
};

export type BoardDataByLanguageInput = {
  content: Scalars['String'];
  files: Array<InputMaybe<FileInput>>;
  langType: LangType;
  title: Scalars['String'];
};

export type BoardDataConnection = {
  __typename?: 'BoardDataConnection';
  nodes: Array<Maybe<BoardData>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum BoardDataConnectionField {
  Id = 'ID'
}

export type BoardDataConnectionOrder = {
  direction?: InputMaybe<OrderDirectionType>;
  field?: InputMaybe<BoardDataConnectionField>;
};

export type BoardDataConnectionWhere = {
  field?: InputMaybe<Scalars['String']>;
  keyword?: InputMaybe<Scalars['String']>;
  serviceType: BoardServiceType;
};

export type BoardDataLanguage = {
  __typename?: 'BoardDataLanguage';
  content: Scalars['String'];
  langType: LangType;
  title: Scalars['String'];
};

export type BoardDataLanguageInput = {
  content: Scalars['String'];
  langType: LangType;
  title: Scalars['String'];
};

export type BoardDataWhere = {
  id: Scalars['ID'];
  langType: LangType;
};

export type BoardFaq = {
  __typename?: 'BoardFaq';
  content: Scalars['String'];
  createdAt: Scalars['String'];
  faqCode: Scalars['Int'];
  faqCodeName: Scalars['String'];
  id: Scalars['String'];
  isView: Scalars['Boolean'];
  languages: Array<BoardFaqLanguage>;
  serviceType: BoardServiceType;
  title: Scalars['String'];
};

export type BoardFaqConnection = {
  __typename?: 'BoardFaqConnection';
  nodes?: Maybe<Array<BoardFaq>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum BoardFaqConnectionField {
  Id = 'ID'
}

export type BoardFaqConnectionOrder = {
  direction?: InputMaybe<OrderDirectionType>;
  field?: InputMaybe<BoardFaqConnectionField>;
};

export type BoardFaqConnectionWhere = {
  faqCode?: InputMaybe<Scalars['Int']>;
  field?: InputMaybe<Scalars['String']>;
  keyword?: InputMaybe<Scalars['String']>;
  serviceType: BoardServiceType;
};

export type BoardFaqLanguage = {
  __typename?: 'BoardFaqLanguage';
  content: Scalars['String'];
  langType: LangType;
  title: Scalars['String'];
};

export type BoardFaqLanguageInput = {
  content: Scalars['String'];
  langType: LangType;
  title: Scalars['String'];
};

export type BoardFaqWhere = {
  id: Scalars['ID'];
  langType: LangType;
};

export type BoardFile = {
  __typename?: 'BoardFile';
  contentId: Scalars['ID'];
  contentType: BoardContentType;
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  langType: LangType;
  name: Scalars['String'];
  type: Scalars['String'];
  url: Scalars['String'];
};

export type BoardImage = {
  __typename?: 'BoardImage';
  contentId: Scalars['ID'];
  contentType: BoardImageContentType;
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  idx: Scalars['Int'];
  imageKey: Scalars['String'];
  imageUrl: Scalars['String'];
};

export enum BoardImageContentType {
  Contact = 'CONTACT',
  Faq = 'FAQ',
  Notice = 'NOTICE'
}

export type BoardNotice = {
  __typename?: 'BoardNotice';
  content: Scalars['String'];
  createdAt: Scalars['String'];
  cursorInfo: CursorInfo;
  dataByLanguages: Array<BoardDataByLanguage>;
  files: Array<Maybe<BoardFile>>;
  id: Scalars['String'];
  images?: Maybe<Array<BoardImage>>;
  isTop: Scalars['Boolean'];
  isView: Scalars['Boolean'];
  /** @deprecated Use `dataByLanguages`. */
  languages: Array<BoardNoticeLanguage>;
  serviceType: BoardServiceType;
  title: Scalars['String'];
  viewCount: Scalars['Int'];
};

export type BoardNoticeConnection = {
  __typename?: 'BoardNoticeConnection';
  nodes?: Maybe<Array<BoardNotice>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum BoardNoticeConnectionField {
  Id = 'ID'
}

export type BoardNoticeConnectionOrder = {
  direction?: InputMaybe<OrderDirectionType>;
  field?: InputMaybe<BoardNoticeConnectionField>;
};

export type BoardNoticeConnectionWhere = {
  field?: InputMaybe<Scalars['String']>;
  keyword?: InputMaybe<Scalars['String']>;
  serviceType: BoardServiceType;
};

export type BoardNoticeLanguage = {
  __typename?: 'BoardNoticeLanguage';
  content: Scalars['String'];
  langType: LangType;
  title: Scalars['String'];
};

export type BoardNoticeLanguageInput = {
  content: Scalars['String'];
  langType: LangType;
  title: Scalars['String'];
};

export type BoardNoticeWhere = {
  id: Scalars['ID'];
  langType: LangType;
};

export enum BoardServiceType {
  Allthatcoding = 'ALLTHATCODING',
  Home = 'HOME',
  Lms = 'LMS',
  Makingpack = 'MAKINGPACK'
}

export enum BookmarkServiceType {
  Curriculum = 'CURRICULUM',
  Lesson = 'LESSON'
}

export type ButtonInfo = {
  __typename?: 'ButtonInfo';
  idx: Scalars['Int'];
  image: ImageInfo;
  linkUrl: Scalars['String'];
  title: Scalars['String'];
};

export enum CanProtocolCode {
  AssignAction = 'ASSIGN_ACTION',
  AssignId = 'ASSIGN_ID',
  Battery = 'BATTERY',
  ChannelProperty = 'CHANNEL_PROPERTY',
  Echo = 'ECHO',
  Event = 'EVENT',
  FindId = 'FIND_ID',
  FirmwareCommand = 'FIRMWARE_COMMAND',
  FirmwareData = 'FIRMWARE_DATA',
  FirmwareState = 'FIRMWARE_STATE',
  Health = 'HEALTH',
  ModuleInformation = 'MODULE_INFORMATION',
  NetworkData = 'NETWORK_DATA',
  NetworkTopology = 'NETWORK_TOPOLOGY',
  RequestMonitor = 'REQUEST_MONITOR',
  RequestProperty = 'REQUEST_PROPERTY',
  SetProperty = 'SET_PROPERTY',
  SetState = 'SET_STATE',
  StreamCommand = 'STREAM_COMMAND',
  StreamData = 'STREAM_DATA',
  StreamState = 'STREAM_STATE',
  SyncSignal = 'SYNC_SIGNAL',
  TopologySignal = 'TOPOLOGY_SIGNAL',
  Variable = 'VARIABLE',
  Warning = 'WARNING'
}

export type Classroom = Node & {
  __typename?: 'Classroom';
  activity: ClassroomActivity;
  cLesson: Scalars['Int'];
  cLessonDoing: Scalars['Int'];
  createdAt: Scalars['String'];
  gradeType: ClassroomGradeType;
  id: Scalars['ID'];
  idx: Scalars['Int'];
  mainImg: ImageInfo;
  openType: ClassroomOpenType;
  ownerId: Scalars['ID'];
  ownerName: Scalars['String'];
  summary: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type ClassroomActivity = {
  __typename?: 'ClassroomActivity';
  cAlarm: Scalars['Int'];
  cStudent: Scalars['Int'];
};

export type ClassroomConnection = {
  __typename?: 'ClassroomConnection';
  edges: Array<Maybe<ClassroomEdge>>;
  nodes: Array<Maybe<Classroom>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum ClassroomConnectionField {
  Id = 'ID'
}

export type ClassroomConnectionOrder = {
  direction?: InputMaybe<OrderDirection>;
  field: ClassroomConnectionField;
};

export type ClassroomConnectionWhere = {
  filter?: InputMaybe<Scalars['String']>;
  openType?: InputMaybe<ClassroomOpenType>;
};

export type ClassroomEdge = {
  __typename?: 'ClassroomEdge';
  cursor: Scalars['String'];
  node: Classroom;
};

export enum ClassroomGradeType {
  Element_1Grade = 'ELEMENT_1_GRADE',
  Element_2Grade = 'ELEMENT_2_GRADE',
  Element_3Grade = 'ELEMENT_3_GRADE',
  Element_4Grade = 'ELEMENT_4_GRADE',
  Element_5Grade = 'ELEMENT_5_GRADE',
  Element_6Grade = 'ELEMENT_6_GRADE',
  Middle_1Grade = 'MIDDLE_1_GRADE',
  Middle_2Grade = 'MIDDLE_2_GRADE',
  Middle_3Grade = 'MIDDLE_3_GRADE',
  NormalGrade = 'NORMAL_GRADE',
  PreSchoolerGrade = 'PRE_SCHOOLER_GRADE'
}

export type ClassroomHomework = Node & {
  __typename?: 'ClassroomHomework';
  classroomId: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['String'];
  expireDate: Scalars['String'];
  id: Scalars['ID'];
  isSubmission: Scalars['Boolean'];
  lessonId: Scalars['String'];
  lessonName: Scalars['String'];
  progress: LessonProgress;
  title: Scalars['String'];
  updatedAt: Scalars['String'];
  userId: Scalars['String'];
  userName: Scalars['String'];
};

export type ClassroomHomeworkConnection = {
  __typename?: 'ClassroomHomeworkConnection';
  edges: Array<Maybe<ClassroomHomeworkEdge>>;
  nodes: Array<Maybe<ClassroomHomework>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum ClassroomHomeworkConnectionField {
  Id = 'ID'
}

export type ClassroomHomeworkConnectionOrder = {
  direction?: InputMaybe<OrderDirection>;
  field: ClassroomHomeworkConnectionField;
};

export type ClassroomHomeworkConnectionWhere = {
  classroomId: Scalars['String'];
};

export type ClassroomHomeworkEdge = {
  __typename?: 'ClassroomHomeworkEdge';
  cursor: Scalars['String'];
  node: ClassroomHomework;
};

export type ClassroomHomeworkGroup = {
  __typename?: 'ClassroomHomeworkGroup';
  date: Scalars['String'];
  nodes: Array<Maybe<ClassroomHomework>>;
};

export type ClassroomHomeworkGroupConnection = {
  __typename?: 'ClassroomHomeworkGroupConnection';
  group: Array<Maybe<ClassroomHomeworkGroup>>;
};

export type ClassroomHomeworkGroupConnectionOrder = {
  direction?: InputMaybe<OrderDirection>;
};

export type ClassroomHomeworkGroupConnectionWhere = {
  classroomId: Scalars['String'];
};

export type ClassroomHomeworkWhere = {
  classroomId: Scalars['String'];
  id: Scalars['ID'];
};

export type ClassroomImage = Node & {
  __typename?: 'ClassroomImage';
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  updatedAt: Scalars['String'];
};

export type ClassroomImageConnection = {
  __typename?: 'ClassroomImageConnection';
  edges: Array<Maybe<ClassroomImageEdge>>;
  nodes: Array<Maybe<ClassroomImage>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ClassroomImageEdge = {
  __typename?: 'ClassroomImageEdge';
  cursor: Scalars['String'];
  node: ClassroomImage;
};

export type ClassroomLessonConnection = {
  __typename?: 'ClassroomLessonConnection';
  edges: Array<Maybe<ClassroomLessonEdge>>;
  nodes: Array<Scalars['String']>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum ClassroomLessonConnectionField {
  Id = 'ID'
}

export type ClassroomLessonConnectionOrder = {
  direction?: InputMaybe<OrderDirection>;
  field: ClassroomLessonConnectionField;
};

export type ClassroomLessonConnectionWhere = {
  classroomId: Scalars['String'];
};

export type ClassroomLessonEdge = {
  __typename?: 'ClassroomLessonEdge';
  cursor: Scalars['String'];
  node: Scalars['String'];
};

export enum ClassroomLessonStartType {
  FiveDaysPreOpen = 'FIVE_DAYS_PRE_OPEN',
  FourDaysPreOpen = 'FOUR_DAYS_PRE_OPEN',
  None = 'NONE',
  OneDayPreOpen = 'ONE_DAY_PRE_OPEN',
  Private = 'PRIVATE',
  SixDaysPreOpen = 'SIX_DAYS_PRE_OPEN',
  ThreeDaysPreOpen = 'THREE_DAYS_PRE_OPEN',
  TwoDaysPreOpen = 'TWO_DAYS_PRE_OPEN'
}

export enum ClassroomLessonStatus {
  Offline = 'OFFLINE',
  Online = 'ONLINE'
}

export type ClassroomLogin = {
  __typename?: 'ClassroomLogin';
  classroomId: Scalars['String'];
  expireTime: Scalars['String'];
  isUpdatePassword: Scalars['Boolean'];
  name: Scalars['String'];
  refreshToken: Scalars['String'];
  token: Scalars['String'];
  userId: Scalars['String'];
};

export type ClassroomNotice = Node & {
  __typename?: 'ClassroomNotice';
  classroomId: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type ClassroomNoticeConnection = {
  __typename?: 'ClassroomNoticeConnection';
  edges: Array<Maybe<ClassroomNoticeEdge>>;
  nodes: Array<Maybe<ClassroomNotice>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum ClassroomNoticeConnectionField {
  Id = 'ID'
}

export type ClassroomNoticeConnectionOrder = {
  direction?: InputMaybe<OrderDirection>;
  field: ClassroomNoticeConnectionField;
};

export type ClassroomNoticeConnectionWhere = {
  classroomId: Scalars['String'];
  filter?: InputMaybe<Scalars['String']>;
};

export type ClassroomNoticeEdge = {
  __typename?: 'ClassroomNoticeEdge';
  cursor: Scalars['String'];
  node: ClassroomNotice;
};

export enum ClassroomNoticePositionType {
  Main = 'MAIN',
  None = 'NONE'
}

export enum ClassroomNoticeType {
  Homework = 'HOMEWORK',
  None = 'NONE'
}

export type ClassroomNoticeWhere = {
  classroomId: Scalars['String'];
  id: Scalars['ID'];
};

export enum ClassroomOpenType {
  All = 'ALL',
  Close = 'CLOSE',
  Open = 'OPEN'
}

export type ClassroomStudent = Node & {
  __typename?: 'ClassroomStudent';
  cAttendance: Scalars['Int'];
  classroomId: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  lastAccessTime: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  shortWord: Scalars['String'];
  updatedAt: Scalars['String'];
  userId: Scalars['String'];
};

export type ClassroomStudentConnection = {
  __typename?: 'ClassroomStudentConnection';
  edges: Array<Maybe<ClassroomStudentEdge>>;
  nodes: Array<ClassroomStudent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum ClassroomStudentConnectionField {
  Id = 'ID'
}

export type ClassroomStudentConnectionOrder = {
  direction?: InputMaybe<OrderDirection>;
  field: ClassroomStudentConnectionField;
};

export type ClassroomStudentConnectionWhere = {
  classroomId: Scalars['String'];
};

export type ClassroomStudentEdge = {
  __typename?: 'ClassroomStudentEdge';
  cursor: Scalars['String'];
  node: ClassroomStudent;
};

export type ClassroomStudentHomework = Node & {
  __typename?: 'ClassroomStudentHomework';
  content: Scalars['String'];
  createdAt: Scalars['String'];
  fie: Scalars['String'];
  homeworkId: Scalars['String'];
  id: Scalars['ID'];
  updatedAt: Scalars['String'];
  userId: Scalars['String'];
  userName: Scalars['String'];
};

export type ClassroomStudentHomeworkConnection = {
  __typename?: 'ClassroomStudentHomeworkConnection';
  edges: Array<Maybe<ClassroomStudentHomeworkEdge>>;
  nodes: Array<Maybe<ClassroomStudentHomework>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ClassroomStudentHomeworkEdge = {
  __typename?: 'ClassroomStudentHomeworkEdge';
  cursor: Scalars['String'];
  node: ClassroomStudentHomework;
};

export type ClassroomStudentLessonDashboard = Node & {
  __typename?: 'ClassroomStudentLessonDashboard';
  classroomId: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  learningTime: Scalars['String'];
  lessonId: Scalars['String'];
  lessonName: Scalars['String'];
  progress: LessonProgress;
  status: ClassroomLessonStatus;
  updatedAt: Scalars['String'];
  userId: Scalars['String'];
  userName: Scalars['String'];
  works: Array<Maybe<ClassroomWork>>;
};

export type ClassroomStudentLessonDashboardConnection = {
  __typename?: 'ClassroomStudentLessonDashboardConnection';
  edges: Array<Maybe<ClassroomStudentLessonDashboardEdge>>;
  nodes: Array<Maybe<ClassroomStudentLessonDashboard>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum ClassroomStudentLessonDashboardConnectionField {
  Id = 'ID'
}

export type ClassroomStudentLessonDashboardConnectionOrder = {
  direction?: InputMaybe<OrderDirection>;
  field: ClassroomStudentLessonDashboardConnectionField;
};

export type ClassroomStudentLessonDashboardConnectionWhere = {
  classroomId: Scalars['String'];
  lessonId: Scalars['String'];
};

export type ClassroomStudentLessonDashboardEdge = {
  __typename?: 'ClassroomStudentLessonDashboardEdge';
  cursor: Scalars['String'];
  node: ClassroomStudentLessonDashboard;
};

export type ClassroomStudentWhere = {
  classroomId: Scalars['String'];
  userId: Scalars['String'];
};

export type ClassroomWhere = {
  id: Scalars['ID'];
};

export type ClassroomWork = Node & {
  __typename?: 'ClassroomWork';
  classroomId: Scalars['String'];
  code: Scalars['String'];
  contentId: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  lessonId: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
  userId: Scalars['String'];
};

export type CodingStats = {
  __typename?: 'CodingStats';
  answerPercent: Scalars['Float'];
  passQuestionCount: Scalars['Int'];
  rank: Scalars['String'];
  rankPercent: Scalars['Int'];
  tryQuestionCount: Scalars['Int'];
};

export type ConnectModiInput = {
  location?: InputMaybe<GeoLocationInput>;
  swVersion: Scalars['String'];
  type: ModiModuleType;
  uuid: Scalars['String'];
};

export type Container = {
  __typename?: 'Container';
  accessLink: AccessLink;
  area: AreaType;
  createdAt: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isPublic: Scalars['Boolean'];
  name: Scalars['String'];
  namespace: Scalars['String'];
  owner: User;
  podName: Scalars['String'];
  stack: Stack;
  status: Scalars['String'];
};

export type Coordinate = {
  __typename?: 'Coordinate';
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type CoordinateInput = {
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type CreateAccountMemberInput = {
  accountCode: Scalars['Int'];
  gender?: InputMaybe<AccountGenderType>;
  memberCode: Scalars['Int'];
  password: Scalars['String'];
  provider: AccountProviderType;
  school?: InputMaybe<CreateAccountMemberSchoolInput>;
  userEmail: Scalars['String'];
  userId: Scalars['String'];
  userName: Scalars['String'];
};

export type CreateAccountMemberSchoolInput = {
  classCode?: InputMaybe<Scalars['Int']>;
  className?: InputMaybe<Scalars['String']>;
  memberId?: InputMaybe<Scalars['ID']>;
  schoolGubun?: InputMaybe<Scalars['String']>;
  schoolLink?: InputMaybe<Scalars['String']>;
  schoolName?: InputMaybe<Scalars['String']>;
};

export type CreateAppBannerInput = {
  idx: Scalars['Int'];
  image?: InputMaybe<ImageInfoInput>;
  openType: OpenType;
  subTitle?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  type: AppBannerType;
};

export type CreateBoardDataInput = {
  dataByLanguages: Array<BoardDataByLanguageInput>;
  isView: Scalars['Boolean'];
  serviceType: BoardServiceType;
};

export type CreateBoardFaqInput = {
  faqCode: Scalars['Int'];
  isView: Scalars['Boolean'];
  languages: Array<BoardFaqLanguageInput>;
  serviceType: BoardServiceType;
};

export type CreateBoardNoticeInput = {
  dataByLanguages: Array<BoardDataByLanguageInput>;
  isTop: Scalars['Boolean'];
  isView: Scalars['Boolean'];
  serviceType: BoardServiceType;
};

export type CreateClassroomHomeworkInput = {
  classroomId: Scalars['String'];
  content: Scalars['String'];
  expireDate: Scalars['String'];
  lessonId: Scalars['String'];
  title: Scalars['String'];
};

export type CreateClassroomInput = {
  gradeType: ClassroomGradeType;
  idx?: InputMaybe<Scalars['Int']>;
  mainImg: ImageInfoInput;
  openType?: InputMaybe<ClassroomOpenType>;
  summary: Scalars['String'];
  title: Scalars['String'];
};

export type CreateClassroomNoticeInput = {
  classroomId: Scalars['String'];
  content: Scalars['String'];
  title: Scalars['String'];
};

export type CreateClassroomStudentHomeworkInput = {
  classroomId: Scalars['String'];
  content: Scalars['String'];
  fileBase64: Scalars['String'];
  homeworkId: Scalars['String'];
};

export type CreateContainerInput = {
  area: AreaType;
  description?: InputMaybe<Scalars['String']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  stack: StackInput;
};

export type CreateLessonCurriculumInput = {
  bgImg?: InputMaybe<ImageInfoInput>;
  color?: InputMaybe<Scalars['String']>;
  groupType?: InputMaybe<LessonGroupType>;
  idx?: InputMaybe<Scalars['Int']>;
  label: Scalars['String'];
  languages: Array<LessonCurriculumLanguageInput>;
  levelType?: InputMaybe<LessonLevelType>;
  mainImgs?: InputMaybe<Array<InputMaybe<ImageInfoInput>>>;
  openType: OpenType;
  serviceType: LessonServiceType;
  summary?: InputMaybe<LessonSummaryInput>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  textColor?: InputMaybe<Scalars['String']>;
  viewType?: InputMaybe<LessonViewType>;
};

export type CreateLessonCurriculumRelateInput = {
  curriculumId: Scalars['String'];
  lessons: Array<InputMaybe<CurriculumRelateLessonInput>>;
};

export type CreateLessonEpubInput = {
  id: Scalars['ID'];
};

export type CreateLessonHardwareInput = {
  hardwareType: LessonHardwareType;
  mainImg: ImageInfoInput;
  subTitle?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type CreateLessonInput = {
  answerCode?: InputMaybe<Scalars['String']>;
  bgImg?: InputMaybe<ImageInfoInput>;
  classTime?: InputMaybe<Scalars['Int']>;
  color?: InputMaybe<Scalars['String']>;
  creationType?: InputMaybe<LessonCodingCreationType>;
  epubUrl?: InputMaybe<Scalars['String']>;
  groupType?: InputMaybe<LessonGroupType>;
  idx?: InputMaybe<Scalars['Int']>;
  languages: Array<LessonLanguageInput>;
  levelType?: InputMaybe<LessonLevelType>;
  lockType?: InputMaybe<TrueFalseType>;
  mainImgs?: InputMaybe<Array<InputMaybe<ImageInfoInput>>>;
  openType: OpenType;
  serviceType: LessonServiceType;
  summary?: InputMaybe<LessonSummaryInput>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  textColor?: InputMaybe<Scalars['String']>;
  videoType?: InputMaybe<Scalars['String']>;
  videoURL?: InputMaybe<Scalars['String']>;
};

export type CreateLessonPlanContentInput = {
  lessonId: Scalars['String'];
  lessonPlanId: Scalars['String'];
  templates?: InputMaybe<Array<LessonPlanContentTemplateInput>>;
  title: Scalars['String'];
  type: LessonPlanContentType;
  viewType: LessonPlanContentViewType;
};

export type CreateLessonPlanInput = {
  contents: Array<LessonPlanContentInput>;
  lessonId: Scalars['String'];
  title: Scalars['String'];
  viewType: LessonPlanViewType;
};

export type CreateLessonPlanPdfInput = {
  lessonId: Scalars['String'];
  pdfBase64: Scalars['String'];
  title: Scalars['String'];
  viewType: LessonPlanContentViewType;
};

export type CreateModiCmdResultInput = {
  modiNo: Scalars['Int'];
  requestCanProtocolCodeNo: Scalars['Int'];
  requestPacket: Scalars['String'];
  responseCanProtocolCodeNo?: InputMaybe<Scalars['Int']>;
  responsePacket?: InputMaybe<Scalars['String']>;
};

export type CreateModiInput = {
  location: GeoLocationInput;
  swVersion: Scalars['String'];
  type: ModiModuleType;
  uuid: Scalars['String'];
};

export type CreateProjectInput = {
  codeType: ProjectCodeType;
  jsonData?: InputMaybe<Scalars['String']>;
  thumb?: InputMaybe<ImageInfoInput>;
  title: Scalars['String'];
  userKey: Scalars['String'];
};

export type CreateProjectWorkInput = {
  codeType: ProjectCodeType;
  jsonData: Scalars['String'];
  lessonContentId: Scalars['String'];
  lessonId: Scalars['String'];
  thumb?: InputMaybe<ImageInfoInput>;
  title: Scalars['String'];
};

export type CreateQuestionInput = {
  answerCode: Scalars['String'];
  args: Array<ArgInput>;
  infos: Array<QuestionInfoInput>;
  initCode: Scalars['String'];
  levelType: QuestionLevelType;
  limitTime: Scalars['String'];
  openType: QuestionOpenType;
  ownerId: Scalars['String'];
  returnType: Scalars['String'];
  title: Scalars['String'];
  types: Array<QuestionType>;
};

export type CreateReviewInput = {
  comment: Scalars['String'];
  serviceId: Scalars['String'];
  serviceType: ReviewServiceType;
  title: Scalars['String'];
};

export type CreateReviewQnaInput = {
  comment: Scalars['String'];
  serviceId: Scalars['String'];
  serviceType: ReviewQnaServiceType;
  title: Scalars['String'];
};

export type CreateReviewReplyInput = {
  comment: Scalars['String'];
  reviewId: Scalars['String'];
};

export type CreateSearchIndexInput = {
  indexType: SearchIndexType;
  serviceId?: InputMaybe<Scalars['String']>;
};

export type CreateStatLessonInput = {
  cContent?: InputMaybe<Scalars['Int']>;
  cRetry?: InputMaybe<Scalars['Int']>;
  cSuccess?: InputMaybe<Scalars['Int']>;
  eTime: Scalars['String'];
  lessonContentId: Scalars['String'];
  lessonId: Scalars['String'];
  ownerId?: InputMaybe<Scalars['String']>;
  questionType?: InputMaybe<StatQuestionType>;
  sTime: Scalars['String'];
};

export type CreateStatViewInput = {
  curriculumId: Scalars['String'];
  lessonId: Scalars['String'];
  userId: Scalars['String'];
};

export type CreateUploadImageInput = {
  id: Scalars['String'];
  image: ImageInfoInput;
  serviceType: UploadImageServiceType;
};

export type CurriculumRelateLessonInput = {
  idx?: InputMaybe<Scalars['Int']>;
  lessonId: Scalars['String'];
  summary?: InputMaybe<Scalars['String']>;
};

export type CursorInfo = {
  __typename?: 'CursorInfo';
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export enum CusorType {
  After = 'AFTER',
  Before = 'BEFORE'
}

export enum DecorationType {
  BottomPosition = 'BOTTOM_POSITION',
  CenterPosition = 'CENTER_POSITION',
  CompletionKind = 'COMPLETION_KIND',
  TopPosition = 'TOP_POSITION'
}

export type DelClassroomLessonInput = {
  id: Scalars['ID'];
  lessonId: Scalars['String'];
};

export type DelClassroomStudentInput = {
  id: Scalars['ID'];
};

export type DeleteAppBannerInput = {
  id: Scalars['ID'];
};

export type DeleteBoardInput = {
  id: Scalars['ID'];
};

export type DeleteClassroomHomeworkInput = {
  classroomId: Scalars['String'];
  id: Scalars['ID'];
};

export type DeleteClassroomInput = {
  id: Scalars['ID'];
};

export type DeleteClassroomNoticeInput = {
  classroomId: Scalars['String'];
  id: Scalars['ID'];
};

export type DeleteClassroomStudentHomeworkInput = {
  id: Scalars['ID'];
};

export type DeleteLessonCurriculumInput = {
  id: Scalars['ID'];
};

export type DeleteLessonCurriculumRelateInput = {
  curriculumId: Scalars['String'];
  lessonId: Scalars['String'];
};

export type DeleteLessonHardwareInput = {
  id: Scalars['ID'];
};

export type DeleteLessonInput = {
  id: Scalars['ID'];
};

export type DeleteLessonPlanContentInput = {
  id: Scalars['ID'];
  lessonId: Scalars['String'];
  lessonPlanId: Scalars['String'];
};

export type DeleteLessonPlanInput = {
  id: Scalars['ID'];
};

export type DeleteModiInput = {
  id: Scalars['Int'];
};

export type DeleteProjectInput = {
  id: Scalars['ID'];
  userKey: Scalars['String'];
};

export type DeleteProjectWorkInput = {
  id: Scalars['ID'];
};

export type DeleteReviewInput = {
  id: Scalars['String'];
};

export type DeleteReviewQnaInput = {
  id: Scalars['String'];
};

export type DeleteReviewReplyInput = {
  id: Scalars['String'];
};

export type EnrollLessonCurriculumInput = {
  curriculumId: Scalars['String'];
};

export type EvaluationResult = {
  __typename?: 'EvaluationResult';
  accuracyAvg: Scalars['Int'];
  accuracyGrade: Scalars['Int'];
  accuracyGradeArray: Array<Scalars['Int']>;
  accuracyScore: Scalars['Float'];
  createdAt: Scalars['String'];
  durationGradeArray: Array<Scalars['Int']>;
  durationTime: Scalars['Int'];
  durationTimeAvg: Scalars['Int'];
  durationTimeGrade: Scalars['Int'];
  durationTimeScore: Scalars['Float'];
  evaluationNo: Scalars['String'];
  evaluationResultNo: Scalars['String'];
  grade: Scalars['String'];
  id: Scalars['ID'];
  limitTime: Scalars['Int'];
  questionNo: Scalars['String'];
  submitCnt: Scalars['Int'];
  submitCntAvg: Scalars['Int'];
  submitCntGrade: Scalars['Int'];
  submitGradeArray: Array<Scalars['Int']>;
  totalScore: Scalars['Float'];
  userNo: Scalars['String'];
};

export type EvaluationResultWhere = {
  evaluationNo?: InputMaybe<Scalars['String']>;
  questionNo: Scalars['String'];
};

export type ExampleTestcaseWhere = {
  ID: Scalars['String'];
};

export type ExecuteCodeInput = {
  code: Scalars['String'];
  language: LanguageType;
  questionNo: Scalars['String'];
};

export type ExecuteCodeOutput = {
  __typename?: 'ExecuteCodeOutput';
  error?: Maybe<Scalars['String']>;
  results?: Maybe<Array<ExecuteCodeResult>>;
};

export type ExecuteCodeResult = {
  __typename?: 'ExecuteCodeResult';
  input: Array<QuestionTestcaseParam>;
  output: QuestionTestcaseParam;
  pass: Scalars['Boolean'];
  responseTime?: Maybe<Scalars['String']>;
  return: Scalars['String'];
  score?: Maybe<Scalars['Int']>;
  testcaseNo: Scalars['String'];
};

export type ExecuteQuestionIndexingInput = {
  questionNo: Scalars['String'];
};

export enum FileExtType {
  Jpg = 'JPG',
  Pdf = 'PDF',
  Png = 'PNG',
  Zip = 'ZIP'
}

export type FileInfo = {
  __typename?: 'FileInfo';
  ext: FileExtType;
  idx: Scalars['Int'];
  key: Scalars['String'];
  name: Scalars['String'];
  url: Scalars['String'];
};

export type FileInput = {
  langType: LangType;
  name: Scalars['String'];
  rawFile?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FindAccountPasswordInput = {
  userId: Scalars['String'];
};

export type GeoLocation = {
  __typename?: 'GeoLocation';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  timestamp: Scalars['String'];
};

export type GeoLocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  timestamp: Scalars['String'];
};

export type HelloSaidEvent = {
  __typename?: 'HelloSaidEvent';
  id: Scalars['String'];
  msg: Scalars['String'];
};

export type ImageInfo = {
  __typename?: 'ImageInfo';
  domain: Scalars['String'];
  height: Scalars['Int'];
  idx: Scalars['Int'];
  key: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type ImageInfoInput = {
  height?: InputMaybe<Scalars['Int']>;
  idx?: InputMaybe<Scalars['Int']>;
  rawFile?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export enum LangType {
  Cn = 'CN',
  En = 'EN',
  Jp = 'JP',
  Ko = 'KO'
}

export enum LanguageType {
  Go = 'GO',
  Node = 'NODE',
  Python = 'PYTHON'
}

export type Lesson = Node & {
  __typename?: 'Lesson';
  answerCode: Scalars['String'];
  bgImg: ImageInfo;
  classTime: Scalars['Int'];
  color: Scalars['String'];
  createdAt: Scalars['String'];
  creationType: LessonCodingCreationType;
  describe: Scalars['String'];
  elementJson: Scalars['String'];
  epubUrl: Scalars['String'];
  files: Array<FileInfo>;
  groupType: LessonGroupType;
  id: Scalars['ID'];
  idx: Scalars['Int'];
  isEdit: Scalars['Boolean'];
  isStart: Scalars['Boolean'];
  languages: Array<LessonLanguage>;
  lessonPlans: Array<LessonPlan>;
  levelType: LessonLevelType;
  lockType: TrueFalseType;
  mainImgs: Array<ImageInfo>;
  openType: OpenType;
  ownerId: Scalars['String'];
  ownerName: Scalars['String'];
  progressRate: Scalars['Int'];
  serviceType: LessonServiceType;
  startTime: Scalars['String'];
  startType: ClassroomLessonStartType;
  subTitle: Scalars['String'];
  summary: LessonSummary;
  tags: Array<Scalars['String']>;
  textColor: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
  userActivity: UserActivity;
  userId: Scalars['String'];
  videoType: LessonVideoType;
  videoURL: Scalars['String'];
};

export enum LessonBookConnectionField {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  Popularity = 'POPULARITY'
}

export type LessonCategory = {
  __typename?: 'LessonCategory';
  title: Scalars['String'];
  total: Scalars['Int'];
};

export type LessonCategoryWhere = {
  serviceType: LessonServiceType;
};

export enum LessonCodingCreationType {
  BingoMachine = 'BINGO_MACHINE',
  CrocodileTeeth = 'CROCODILE_TEETH',
  Fishing = 'FISHING',
  Free = 'FREE',
  Helicopter = 'HELICOPTER',
  Joytrope = 'JOYTROPE',
  LedMetronium = 'LED_METRONIUM',
  LedTimer = 'LED_TIMER',
  Lighthouse = 'LIGHTHOUSE',
  MonsterTruck = 'MONSTER_TRUCK',
  MoodLamp = 'MOOD_LAMP',
  PirateShip = 'PIRATE_SHIP',
  RandomRoulette = 'RANDOM_ROULETTE',
  RcCar = 'RC_CAR',
  RotatingPencilHolder = 'ROTATING_PENCIL_HOLDER',
  Safe = 'SAFE',
  SurfingBot = 'SURFING_BOT',
  TongsArm = 'TONGS_ARM'
}

export enum LessonCodingType {
  EntryCoding = 'ENTRY_CODING',
  PymodiCoding = 'PYMODI_CODING',
  ScratchCoding = 'SCRATCH_CODING'
}

export type LessonConnection = {
  __typename?: 'LessonConnection';
  edges: Array<Maybe<LessonEdge>>;
  nodes: Array<Maybe<Lesson>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum LessonConnectionField {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  Like = 'Like',
  Popularity = 'POPULARITY'
}

export type LessonConnectionOrder = {
  direction?: InputMaybe<OrderDirectionType>;
  field: LessonConnectionField;
};

export type LessonConnectionWhere = {
  classroomId?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  groupType?: InputMaybe<LessonGroupType>;
  lang?: InputMaybe<LangType>;
  lessonIds?: InputMaybe<Array<Scalars['String']>>;
  levelType?: InputMaybe<LessonLevelType>;
  openType?: InputMaybe<OpenType>;
  recommendBestLesson?: InputMaybe<LessonRecommendBestWhere>;
  recommendNextLesson?: InputMaybe<LessonRecommendNextWhere>;
  recommendOtherTeacherLesson?: InputMaybe<LessonRecommendOtherTeacherWhere>;
  recommendSimilarityLesson?: InputMaybe<LessonRecommendSimilarityWhere>;
  recommendType?: InputMaybe<LessonRecommendType>;
  recommendUserLesson?: InputMaybe<LessonRecommendUserWhere>;
  serviceType?: InputMaybe<LessonServiceType>;
  serviceTypes?: InputMaybe<Array<LessonServiceType>>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  user?: InputMaybe<Scalars['String']>;
  userActionType?: InputMaybe<LessonUserActionType>;
};

export type LessonCurriculum = Node & {
  __typename?: 'LessonCurriculum';
  bgImg: ImageInfo;
  color: Scalars['String'];
  createdAt: Scalars['String'];
  describe: Scalars['String'];
  groupType: LessonGroupType;
  id: Scalars['ID'];
  idx: Scalars['Int'];
  label: Scalars['String'];
  labelColor: Scalars['String'];
  languages: Array<LessonCurriculumLanguage>;
  lessons: Array<Lesson>;
  levelType: LessonLevelType;
  mainImgs: Array<ImageInfo>;
  openType: OpenType;
  ownerId: Scalars['String'];
  ownerName: Scalars['String'];
  serviceType: LessonServiceType;
  subTitle: Scalars['String'];
  summary: LessonSummary;
  tags: Array<Scalars['String']>;
  textColor: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
  userActivity: UserActivity;
  viewType: LessonViewType;
};

export type LessonCurriculumConnection = {
  __typename?: 'LessonCurriculumConnection';
  edges: Array<Maybe<LessonCurriculumEdge>>;
  nodes: Array<Maybe<LessonCurriculum>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum LessonCurriculumConnectionField {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  Like = 'Like',
  Popularity = 'POPULARITY'
}

export type LessonCurriculumConnectionOrder = {
  direction?: InputMaybe<OrderDirectionType>;
  field: LessonCurriculumConnectionField;
};

export type LessonCurriculumConnectionWhere = {
  curriculumIds?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<Scalars['String']>;
  groupType?: InputMaybe<LessonGroupType>;
  lang?: InputMaybe<LangType>;
  levelType?: InputMaybe<LessonLevelType>;
  openType?: InputMaybe<OpenType>;
  serviceType?: InputMaybe<LessonServiceType>;
  serviceTypes?: InputMaybe<Array<LessonServiceType>>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  user?: InputMaybe<Scalars['String']>;
  userActionType?: InputMaybe<LessonUserActionType>;
};

export type LessonCurriculumEdge = {
  __typename?: 'LessonCurriculumEdge';
  cursor: Scalars['String'];
  node: LessonCurriculum;
};

export type LessonCurriculumLanguage = {
  __typename?: 'LessonCurriculumLanguage';
  describe: Scalars['String'];
  label: Scalars['String'];
  langType: LangType;
  subTitle: Scalars['String'];
  title: Scalars['String'];
};

export type LessonCurriculumLanguageInput = {
  describe?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  langType: LangType;
  subTitle?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type LessonCurriculumWhere = {
  id: Scalars['ID'];
  lang?: InputMaybe<LangType>;
  user?: InputMaybe<Scalars['String']>;
};

export type LessonEdge = {
  __typename?: 'LessonEdge';
  cursor: Scalars['String'];
  node: Lesson;
};

export type LessonGroup = {
  __typename?: 'LessonGroup';
  date: Scalars['String'];
  nodes: Array<Maybe<Lesson>>;
};

export type LessonGroupConnection = {
  __typename?: 'LessonGroupConnection';
  group: Array<Maybe<LessonGroup>>;
};

export type LessonGroupConnectionOrder = {
  direction?: InputMaybe<OrderDirectionType>;
};

export type LessonGroupConnectionWhere = {
  classroomId: Scalars['String'];
};

export type LessonGroupLabel = {
  __typename?: 'LessonGroupLabel';
  label: Scalars['String'];
  type: LessonGroupType;
};

export enum LessonGroupType {
  ElementBeginningGroup = 'ELEMENT_BEGINNING_GROUP',
  ElementHighGroup = 'ELEMENT_HIGH_GROUP',
  HighSchoolerGroup = 'HIGH_SCHOOLER_GROUP',
  MiddleSchoolerGroup = 'MIDDLE_SCHOOLER_GROUP',
  NoneGroup = 'NONE_GROUP',
  PreSchoolerGroup = 'PRE_SCHOOLER_GROUP'
}

export type LessonHardware = Node & {
  __typename?: 'LessonHardware';
  createdAt: Scalars['String'];
  hardwareType: LessonHardwareType;
  id: Scalars['ID'];
  idx: Scalars['Int'];
  mainImg: ImageInfo;
  subTitle: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type LessonHardwareGroup = {
  __typename?: 'LessonHardwareGroup';
  hardwareType: LessonHardwareType;
  nodes: Array<LessonHardware>;
  title: Scalars['String'];
};

export enum LessonHardwareType {
  HelloAiHardware = 'HELLO_AI_HARDWARE',
  MicrobitHardware = 'MICROBIT_HARDWARE',
  Modi1Hardware = 'MODI1_HARDWARE',
  Modi2Hardware = 'MODI2_HARDWARE',
  NoneHardware = 'NONE_HARDWARE',
  RaspberryHardware = 'RASPBERRY_HARDWARE'
}

export type LessonHardwareWhere = {
  id: Scalars['ID'];
};

export enum LessonIndexType {
  Lesson = 'LESSON',
  LessonCurriculum = 'LESSON_CURRICULUM'
}

export type LessonLanguage = {
  __typename?: 'LessonLanguage';
  describe: Scalars['String'];
  label: Scalars['String'];
  langType: LangType;
  subTitle: Scalars['String'];
  title: Scalars['String'];
};

export type LessonLanguageInput = {
  describe?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  langType: LangType;
  subTitle?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export enum LessonLanguageType {
  En = 'EN',
  Jp = 'JP',
  Ko = 'KO'
}

export type LessonLevelLabel = {
  __typename?: 'LessonLevelLabel';
  label: Scalars['String'];
  type: LessonLevelType;
};

export enum LessonLevelType {
  BeginningLevel = 'BEGINNING_LEVEL',
  HighLevel = 'HIGH_LEVEL',
  IntermediateLevel = 'INTERMEDIATE_LEVEL',
  NoneLevel = 'NONE_LEVEL'
}

export enum LessonOpenType {
  All = 'ALL',
  Close = 'CLOSE',
  Open = 'OPEN'
}

export type LessonPlan = Node & {
  __typename?: 'LessonPlan';
  contents: Array<LessonPlanContent>;
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  idx: Scalars['Int'];
  lessonId: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
  viewType: LessonPlanViewType;
};

export type LessonPlanContent = Node & {
  __typename?: 'LessonPlanContent';
  doneDate: Scalars['String'];
  id: Scalars['ID'];
  idx: Scalars['Int'];
  isDone: Scalars['Boolean'];
  lessonId: Scalars['String'];
  lessonPlanId: Scalars['String'];
  template: LessonPlanContentTemplate;
  templates: Array<Maybe<LessonPlanContentTemplate>>;
  title: Scalars['String'];
  type: LessonPlanContentType;
  viewType: LessonPlanContentViewType;
};

export type LessonPlanContentConnection = {
  __typename?: 'LessonPlanContentConnection';
  edge: LessonPlanContentEdge;
  pageInfo: PageInfo;
  progress: LessonProgress;
  totalCount: Scalars['Int'];
};

export type LessonPlanContentConnectionInput = {
  eTime: Scalars['String'];
  lessonContentId: Scalars['String'];
  lessonId: Scalars['String'];
  ownerId: Scalars['String'];
  sTime: Scalars['String'];
};

export type LessonPlanContentConnectionWhere = {
  id?: InputMaybe<Scalars['ID']>;
  lang?: InputMaybe<LangType>;
  lessonId: Scalars['String'];
};

export type LessonPlanContentEdge = {
  __typename?: 'LessonPlanContentEdge';
  afterCursor: Scalars['String'];
  beforeCursor: Scalars['String'];
  node: LessonPlanContent;
  nodes: Array<Maybe<LessonPlanContent>>;
};

export type LessonPlanContentInput = {
  templates?: InputMaybe<Array<LessonPlanContentTemplateInput>>;
  title: Scalars['String'];
  type: LessonPlanContentType;
  viewType: LessonPlanContentViewType;
};

export type LessonPlanContentTemplate = LessonPlanContentTemplateBase | LessonPlanContentTemplateCoding | LessonPlanContentTemplateImage | LessonPlanContentTemplateText | LessonPlanContentTemplateVideo;

export type LessonPlanContentTemplateBase = {
  __typename?: 'LessonPlanContentTemplateBase';
  content: Scalars['String'];
  coordinate: Coordinate;
  id: Scalars['ID'];
  idx: Scalars['Int'];
  img: ImageInfo;
  type: LessonPlanDataType;
};

export type LessonPlanContentTemplateBaseInput = {
  content: Scalars['String'];
  coordinate?: InputMaybe<CoordinateInput>;
  img?: InputMaybe<ImageInfoInput>;
};

export type LessonPlanContentTemplateCoding = {
  __typename?: 'LessonPlanContentTemplateCoding';
  answerCode: Scalars['String'];
  answerImgs: Array<ImageInfo>;
  codingType: LessonCodingType;
  coordinate: Coordinate;
  creationType: LessonCodingCreationType;
  hardwareType: LessonHardwareType;
  hardwareTypes: Array<LessonHardware>;
  id: Scalars['ID'];
  idx: Scalars['Int'];
  initCode: Scalars['String'];
  purpose: Scalars['String'];
  questions: Array<Scalars['String']>;
  type: LessonPlanDataType;
};

export type LessonPlanContentTemplateCodingInput = {
  answerCode: Scalars['String'];
  answerImgs?: InputMaybe<Array<ImageInfoInput>>;
  codingType: LessonCodingType;
  coordinate?: InputMaybe<CoordinateInput>;
  creationType: LessonCodingCreationType;
  hardwareTypes?: InputMaybe<Array<Scalars['String']>>;
  initCode: Scalars['String'];
  purpose: Scalars['String'];
  questions?: InputMaybe<Array<Scalars['String']>>;
};

export type LessonPlanContentTemplateImage = {
  __typename?: 'LessonPlanContentTemplateImage';
  coordinate: Coordinate;
  decorationTypes: Array<DecorationType>;
  id: Scalars['ID'];
  idx: Scalars['Int'];
  img: ImageInfo;
  isReverse: Scalars['Boolean'];
  type: LessonPlanDataType;
};

export type LessonPlanContentTemplateImageInput = {
  coordinate?: InputMaybe<CoordinateInput>;
  img?: InputMaybe<ImageInfoInput>;
  isReverse?: InputMaybe<Scalars['Boolean']>;
};

export type LessonPlanContentTemplateInput = {
  base?: InputMaybe<LessonPlanContentTemplateBaseInput>;
  coding?: InputMaybe<LessonPlanContentTemplateCodingInput>;
  image?: InputMaybe<LessonPlanContentTemplateImageInput>;
  text?: InputMaybe<LessonPlanContentTemplateTextInput>;
  video?: InputMaybe<LessonPlanContentTemplateVideoInput>;
};

export type LessonPlanContentTemplateText = {
  __typename?: 'LessonPlanContentTemplateText';
  content: Scalars['String'];
  coordinate: Coordinate;
  id: Scalars['ID'];
  idx: Scalars['Int'];
  type: LessonPlanDataType;
};

export type LessonPlanContentTemplateTextInput = {
  content: Scalars['String'];
  coordinate?: InputMaybe<CoordinateInput>;
};

export type LessonPlanContentTemplateVideo = {
  __typename?: 'LessonPlanContentTemplateVideo';
  coordinate: Coordinate;
  id: Scalars['ID'];
  idx: Scalars['Int'];
  thumbImg: ImageInfo;
  type: LessonPlanDataType;
  videoType: LessonVideoType;
  videoURL: Scalars['String'];
};

export type LessonPlanContentTemplateVideoInput = {
  coordinate?: InputMaybe<CoordinateInput>;
  thumbImg: ImageInfoInput;
  videoType: LessonVideoType;
  videoURL: Scalars['String'];
};

export enum LessonPlanContentType {
  BaseContent = 'BASE_CONTENT',
  MultiContent = 'MULTI_CONTENT',
  NoneContent = 'NONE_CONTENT',
  VideoContent = 'VIDEO_CONTENT'
}

export enum LessonPlanContentViewType {
  CodingView = 'CODING_VIEW',
  HorizonFullVerticalDownHalfView = 'HORIZON_FULL_VERTICAL_DOWN_HALF_VIEW',
  HorizonFullVerticalFullView = 'HORIZON_FULL_VERTICAL_FULL_VIEW',
  HorizonFullView = 'HORIZON_FULL_VIEW',
  NoneView = 'NONE_VIEW',
  NormalView = 'NORMAL_VIEW',
  PracticeCodingView = 'PRACTICE_CODING_VIEW',
  SlideView = 'SLIDE_VIEW',
  VerticalFullHorizonRightHalfView = 'VERTICAL_FULL_HORIZON_RIGHT_HALF_VIEW',
  VerticalFullView = 'VERTICAL_FULL_VIEW',
  VerticalTwoFullView = 'VERTICAL_TWO_FULL_VIEW',
  VideoView = 'VIDEO_VIEW'
}

export enum LessonPlanDataType {
  Base = 'BASE',
  Coding = 'CODING',
  Image = 'IMAGE',
  Text = 'TEXT',
  Video = 'VIDEO'
}

export type LessonPlanLayout = Node & {
  __typename?: 'LessonPlanLayout';
  id: Scalars['ID'];
  idx: Scalars['Int'];
  image: ImageInfo;
  title: Scalars['String'];
  type: LessonPlanLayoutType;
};

export enum LessonPlanLayoutType {
  HorizonFull = 'HORIZON_FULL',
  HorizonFullVerticalDownHalf = 'HORIZON_FULL_VERTICAL_DOWN_HALF',
  HorizonFullVerticalFull = 'HORIZON_FULL_VERTICAL_FULL',
  Normal = 'NORMAL',
  VerticalFull = 'VERTICAL_FULL',
  VerticalFullHorizonRightHalf = 'VERTICAL_FULL_HORIZON_RIGHT_HALF',
  VerticalTwoFull = 'VERTICAL_TWO_FULL'
}

export enum LessonPlanViewType {
  LessonPlanNoneView = 'LESSON_PLAN_NONE_VIEW',
  LessonPlanSlideView = 'LESSON_PLAN_SLIDE_VIEW'
}

export type LessonProgress = {
  __typename?: 'LessonProgress';
  current: Scalars['Int'];
  progress: Scalars['Int'];
  progressRate: Scalars['Int'];
  total: Scalars['Int'];
};

export type LessonRecommendBestWhere = {
  month: Scalars['Int'];
  year: Scalars['Int'];
};

export type LessonRecommendNextWhere = {
  lessonId: Scalars['String'];
};

export type LessonRecommendOtherTeacherWhere = {
  lessonId: Scalars['String'];
};

export type LessonRecommendSimilarityWhere = {
  lessonId: Scalars['String'];
};

export enum LessonRecommendType {
  LessonOtherTeacherRecommend = 'LESSON_OTHER_TEACHER_RECOMMEND',
  LessonSimiarlityRecommend = 'LESSON_SIMIARLITY_RECOMMEND',
  LessonUserRecommend = 'LESSON_USER_RECOMMEND'
}

export type LessonRecommendUserWhere = {
  userId?: InputMaybe<Scalars['String']>;
};

export enum LessonServiceType {
  BrickPack = 'BRICK_PACK',
  Cengage = 'CENGAGE',
  Lms = 'LMS',
  MakingPack = 'MAKING_PACK',
  NoneType = 'NONE_TYPE'
}

export type LessonSummary = {
  __typename?: 'LessonSummary';
  codingTypes: Array<LessonCodingType>;
  elements: Array<LessonSummaryElementType>;
  goals: Array<Scalars['String']>;
  hardwareTypes: Array<LessonHardware>;
  intro: Scalars['String'];
  outputs: Array<Scalars['String']>;
  recommendTarget: Scalars['String'];
  summary: Scalars['String'];
};

export enum LessonSummaryElementType {
  AbstractElement = 'ABSTRACT_ELEMENT',
  AlgorithmElement = 'ALGORITHM_ELEMENT',
  AnalysisElement = 'ANALYSIS_ELEMENT',
  AutomationElement = 'AUTOMATION_ELEMENT',
  DataStructureElement = 'DATA_STRUCTURE_ELEMENT',
  ParallelismElement = 'PARALLELISM_ELEMENT',
  SimulationElement = 'SIMULATION_ELEMENT'
}

export type LessonSummaryInput = {
  codingTypes?: InputMaybe<Array<LessonCodingType>>;
  elements?: InputMaybe<Array<LessonSummaryElementType>>;
  goals?: InputMaybe<Array<Scalars['String']>>;
  hardwareTypes?: InputMaybe<Array<Scalars['String']>>;
  intro?: InputMaybe<Scalars['String']>;
  outputs?: InputMaybe<Array<Scalars['String']>>;
  recommendTarget?: InputMaybe<Scalars['String']>;
};

export enum LessonUserActionType {
  LessonDoneAction = 'LESSON_DONE_ACTION',
  LessonFavoriteAction = 'LESSON_FAVORITE_ACTION',
  LessonLikeAction = 'LESSON_LIKE_ACTION',
  LessonOwnerAction = 'LESSON_OWNER_ACTION',
  LessonRegisterAction = 'LESSON_REGISTER_ACTION'
}

export type LessonVideo = Node & {
  __typename?: 'LessonVideo';
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  idx: Scalars['Int'];
  lang: LangType;
  serviceId: Scalars['String'];
  serviceType: VideoServiceType;
  updatedAt: Scalars['String'];
  video: VideoInfo;
};

export type LessonVideoConnection = {
  __typename?: 'LessonVideoConnection';
  edges: Array<Maybe<LessonVideoEdge>>;
  nodes: Array<Maybe<LessonVideo>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum LessonVideoConnectionField {
  CreatedAt = 'CREATED_AT'
}

export type LessonVideoConnectionOrder = {
  field: LessonVideoConnectionField;
};

export type LessonVideoConnectionWhere = {
  lang?: InputMaybe<LangType>;
  serviceIds?: InputMaybe<Array<Scalars['String']>>;
  serviceType?: InputMaybe<LessonServiceType>;
};

export type LessonVideoEdge = {
  __typename?: 'LessonVideoEdge';
  cursor: Scalars['String'];
  node: LessonVideo;
};

export enum LessonVideoGroupType {
  DashIsoGroup = 'DASH_ISO_GROUP',
  HlsGroup = 'HLS_GROUP'
}

export enum LessonVideoType {
  Dash = 'DASH',
  Hls = 'HLS',
  None = 'NONE',
  Youtube = 'YOUTUBE'
}

export enum LessonViewType {
  BigSlideView = 'BIG_SLIDE_VIEW',
  CardView = 'CARD_VIEW',
  ListView = 'LIST_VIEW',
  None = 'NONE',
  PageView = 'PAGE_VIEW',
  SlideView = 'SLIDE_VIEW'
}

export type LessonWhere = {
  id: Scalars['ID'];
  lang?: InputMaybe<LangType>;
  user?: InputMaybe<Scalars['String']>;
};

export enum LikeServiceType {
  Curriculum = 'CURRICULUM',
  Lesson = 'LESSON'
}

export type LoginAccountInput = {
  password: Scalars['String'];
  userId: Scalars['String'];
};

export type LoginClassroomInput = {
  password: Scalars['String'];
  userId: Scalars['String'];
};

export enum MediaProgressStatus {
  Complete = 'COMPLETE',
  Progressing = 'PROGRESSING'
}

export type Modi = {
  __typename?: 'Modi';
  createdAt: Scalars['String'];
  deletedAt: Scalars['String'];
  id: Scalars['ID'];
  location: GeoLocation;
  swVersion: Scalars['String'];
  type: ModiModuleType;
  updatedAt: Scalars['String'];
  uuid: Scalars['String'];
};

export type ModiCmdResult = {
  __typename?: 'ModiCmdResult';
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  modiNo: Scalars['Int'];
  requestCanProtocolCodeNo: Scalars['Int'];
  requestPacket: Scalars['String'];
  responseCanProtocolCodeNo: Scalars['Int'];
  responsePacket: Scalars['String'];
  updatedAt: Scalars['String'];
};

export enum ModiModuleEntity {
  Input = 'INPUT',
  Output = 'OUTPUT',
  Setup = 'SETUP',
  Template = 'TEMPLATE'
}

export enum ModiModuleType {
  Battery = 'BATTERY',
  Button = 'BUTTON',
  Dial = 'DIAL',
  Display = 'DISPLAY',
  Environment = 'ENVIRONMENT',
  Gyroscope = 'GYROSCOPE',
  Ir = 'IR',
  Led = 'LED',
  Mic = 'MIC',
  Motor = 'MOTOR',
  Network = 'NETWORK',
  Speaker = 'SPEAKER',
  Ultrasonic = 'ULTRASONIC'
}

export enum ModiProductVersion {
  V1 = 'V1',
  V2 = 'V2'
}

export type ModiWhere = {
  id?: InputMaybe<Scalars['Int']>;
};

export type MultiUploadFileInput = {
  files: Array<Scalars['Upload']>;
  functionType: UploadFileType;
  id?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  ConnectModi: Modi;
  CreateModi: Modi;
  CreateModiCmdResult: ModiCmdResult;
  CreateQuestion: Scalars['String'];
  DeleteModi: Scalars['Boolean'];
  ExecuteCode: ExecuteCodeOutput;
  ExecuteQuestionIndexing: Scalars['Boolean'];
  StartEvaluation: Scalars['Int'];
  SubmitCode: ExecuteCodeOutput;
  UpdateModi: Scalars['Boolean'];
  UpdateModiCmdResult: Scalars['Boolean'];
  addClassroomLessons: Scalars['Boolean'];
  addClassroomStudents: Scalars['Boolean'];
  authAccountUserEmail: Scalars['Int'];
  authCheckAccountUserEmail: Scalars['String'];
  createAccountMember: Scalars['String'];
  createAppBanner: Scalars['Boolean'];
  createBoardData: Scalars['ID'];
  createBoardFaq: Scalars['ID'];
  createBoardNotice: Scalars['ID'];
  createClassroom: Scalars['String'];
  createClassroomHomework: Scalars['String'];
  createClassroomNotice: Scalars['String'];
  createClassroomStudentHomework: Scalars['String'];
  createContainer: Container;
  createLesson: Scalars['String'];
  createLessonAllIndex: Scalars['Boolean'];
  createLessonBest: Scalars['Boolean'];
  createLessonCurriculum: Scalars['String'];
  createLessonCurriculumRelate: Scalars['Boolean'];
  createLessonEpub: Scalars['String'];
  createLessonHardware: LessonHardware;
  createLessonPlan: LessonPlan;
  createLessonPlanContent: LessonPlanContent;
  createLessonPlanPDF: LessonPlan;
  createProject: Project;
  createProjectWork: ProjectWork;
  createReview: Review;
  createReviewReply: Reply;
  createStatLesson: Scalars['Boolean'];
  createStatView: Scalars['Boolean'];
  createUploadImage: ImageInfo;
  createUploadImages: Array<ImageInfo>;
  delClassroomLessons: Scalars['Boolean'];
  delClassroomStudents: Scalars['Boolean'];
  deleteAppBanner: Scalars['Boolean'];
  deleteBoardData: Scalars['ID'];
  deleteBoardFaq: Scalars['ID'];
  deleteBoardNotice: Scalars['ID'];
  deleteClassroom: Scalars['Boolean'];
  deleteClassroomHomework: Scalars['Boolean'];
  deleteClassroomNotice: Scalars['Boolean'];
  deleteClassroomStudentHomework: Scalars['Boolean'];
  deleteContainer: Scalars['Boolean'];
  deleteLesson: Scalars['Boolean'];
  deleteLessonCurriculum: Scalars['Boolean'];
  deleteLessonCurriculumRelate: Scalars['Boolean'];
  deleteLessonHardware: Scalars['Boolean'];
  deleteLessonPlan: Scalars['Boolean'];
  deleteLessonPlanContent: Scalars['Boolean'];
  deleteProject: Scalars['Boolean'];
  deleteReview: Scalars['Boolean'];
  deleteReviewReply: Scalars['Boolean'];
  enrollLessonCurriculum: Scalars['Boolean'];
  findAccountPassword: Scalars['String'];
  loginAccount: Scalars['String'];
  loginClassroom: ClassroomLogin;
  multiUploadFile: Array<Scalars['String']>;
  refreshClassroomToken: ClassroomLogin;
  resetAccountPassword: Scalars['Boolean'];
  resetClassroomStudentTempPassword: Scalars['String'];
  singleUploadFile: Scalars['String'];
  startClassroomLessonStudent: Scalars['Boolean'];
  toggleLessonBookmark: Scalars['Boolean'];
  toggleLessonLike: Scalars['Boolean'];
  toggleStatLessonBookmark: Scalars['Boolean'];
  toggleStatLessonLike: Scalars['Boolean'];
  unenrollLessonCurriculum: Scalars['Boolean'];
  updateAccountMember: Scalars['String'];
  updateAppBanner: Scalars['Boolean'];
  updateBoardData: Scalars['ID'];
  updateBoardFaq: Scalars['ID'];
  updateBoardNotice: Scalars['ID'];
  updateClassroom: Scalars['Boolean'];
  updateClassroomHomework: Scalars['Boolean'];
  updateClassroomNotice: Scalars['Boolean'];
  updateClassroomStudentHomework: Scalars['Boolean'];
  updateClassroomStudentPassword: Scalars['Boolean'];
  updateClassroomToken: ClassroomLogin;
  updateLesson: Scalars['Boolean'];
  updateLessonCurriculum: Scalars['Boolean'];
  updateLessonHardware: LessonHardware;
  updateLessonPlan: LessonPlan;
  updateLessonPlanContent: LessonPlanContent;
  updateLessonPlanContentsIndex: Scalars['Boolean'];
  updateLessonPlansIndex: Scalars['Boolean'];
  updateProject: Project;
  updateReview: Review;
  updateReviewReply: Reply;
  /** @deprecated Use `singleUploadFile or multiUploadFile`. */
  uploadFile: Scalars['String'];
};


export type MutationConnectModiArgs = {
  input: ConnectModiInput;
};


export type MutationCreateModiArgs = {
  input: CreateModiInput;
};


export type MutationCreateModiCmdResultArgs = {
  input: CreateModiCmdResultInput;
};


export type MutationCreateQuestionArgs = {
  input: CreateQuestionInput;
};


export type MutationDeleteModiArgs = {
  input: DeleteModiInput;
};


export type MutationExecuteCodeArgs = {
  input: ExecuteCodeInput;
};


export type MutationExecuteQuestionIndexingArgs = {
  input: ExecuteQuestionIndexingInput;
};


export type MutationStartEvaluationArgs = {
  input: StartEvaluationInput;
};


export type MutationSubmitCodeArgs = {
  input: SubmitCodeInput;
};


export type MutationUpdateModiArgs = {
  input: UpdateModiInput;
};


export type MutationUpdateModiCmdResultArgs = {
  input: UpdateModiCmdResultInput;
};


export type MutationAddClassroomLessonsArgs = {
  input: Array<AddClassroomLessonInput>;
};


export type MutationAddClassroomStudentsArgs = {
  input: Array<AddClassroomStudentInput>;
};


export type MutationAuthAccountUserEmailArgs = {
  input: AuthAccountUserEmailInput;
};


export type MutationAuthCheckAccountUserEmailArgs = {
  input: AuthCheckAccountUserEmailInput;
};


export type MutationCreateAccountMemberArgs = {
  input: CreateAccountMemberInput;
};


export type MutationCreateAppBannerArgs = {
  input: CreateAppBannerInput;
};


export type MutationCreateBoardDataArgs = {
  input: CreateBoardDataInput;
};


export type MutationCreateBoardFaqArgs = {
  input: CreateBoardFaqInput;
};


export type MutationCreateBoardNoticeArgs = {
  input: CreateBoardNoticeInput;
};


export type MutationCreateClassroomArgs = {
  input: CreateClassroomInput;
};


export type MutationCreateClassroomHomeworkArgs = {
  input: CreateClassroomHomeworkInput;
};


export type MutationCreateClassroomNoticeArgs = {
  input: CreateClassroomNoticeInput;
};


export type MutationCreateClassroomStudentHomeworkArgs = {
  input: CreateClassroomStudentHomeworkInput;
};


export type MutationCreateContainerArgs = {
  input: CreateContainerInput;
};


export type MutationCreateLessonArgs = {
  input: CreateLessonInput;
};


export type MutationCreateLessonAllIndexArgs = {
  input: CreateLessonAllIndexInput;
};


export type MutationCreateLessonCurriculumArgs = {
  input: CreateLessonCurriculumInput;
};


export type MutationCreateLessonCurriculumRelateArgs = {
  input: CreateLessonCurriculumRelateInput;
};


export type MutationCreateLessonEpubArgs = {
  input: CreateLessonEpubInput;
};


export type MutationCreateLessonHardwareArgs = {
  input: CreateLessonHardwareInput;
};


export type MutationCreateLessonPlanArgs = {
  input: CreateLessonPlanInput;
};


export type MutationCreateLessonPlanContentArgs = {
  input: CreateLessonPlanContentInput;
};


export type MutationCreateLessonPlanPdfArgs = {
  input: CreateLessonPlanPdfInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreateProjectWorkArgs = {
  input: CreateProjectWorkInput;
};


export type MutationCreateReviewArgs = {
  input: CreateReviewInput;
};


export type MutationCreateReviewReplyArgs = {
  input: CreateReviewReplyInput;
};


export type MutationCreateStatLessonArgs = {
  input: CreateStatLessonInput;
};


export type MutationCreateStatViewArgs = {
  input: CreateStatViewInput;
};


export type MutationCreateUploadImageArgs = {
  input?: InputMaybe<CreateUploadImageInput>;
};


export type MutationCreateUploadImagesArgs = {
  input: Array<InputMaybe<CreateUploadImageInput>>;
};


export type MutationDelClassroomLessonsArgs = {
  input: Array<DelClassroomLessonInput>;
};


export type MutationDelClassroomStudentsArgs = {
  input: Array<DelClassroomStudentInput>;
};


export type MutationDeleteAppBannerArgs = {
  input: DeleteAppBannerInput;
};


export type MutationDeleteBoardDataArgs = {
  input: DeleteBoardInput;
};


export type MutationDeleteBoardFaqArgs = {
  input: DeleteBoardInput;
};


export type MutationDeleteBoardNoticeArgs = {
  input: DeleteBoardInput;
};


export type MutationDeleteClassroomArgs = {
  input: DeleteClassroomInput;
};


export type MutationDeleteClassroomHomeworkArgs = {
  input: DeleteClassroomHomeworkInput;
};


export type MutationDeleteClassroomNoticeArgs = {
  input: DeleteClassroomNoticeInput;
};


export type MutationDeleteClassroomStudentHomeworkArgs = {
  input: DeleteClassroomStudentHomeworkInput;
};


export type MutationDeleteContainerArgs = {
  containerId: Scalars['String'];
};


export type MutationDeleteLessonArgs = {
  input: DeleteLessonInput;
};


export type MutationDeleteLessonCurriculumArgs = {
  input: DeleteLessonCurriculumInput;
};


export type MutationDeleteLessonCurriculumRelateArgs = {
  input: Array<DeleteLessonCurriculumRelateInput>;
};


export type MutationDeleteLessonHardwareArgs = {
  input: DeleteLessonHardwareInput;
};


export type MutationDeleteLessonPlanArgs = {
  input: DeleteLessonPlanInput;
};


export type MutationDeleteLessonPlanContentArgs = {
  input: DeleteLessonPlanContentInput;
};


export type MutationDeleteProjectArgs = {
  input: DeleteProjectInput;
};


export type MutationDeleteReviewArgs = {
  input: DeleteReviewInput;
};


export type MutationDeleteReviewReplyArgs = {
  input: DeleteReviewReplyInput;
};


export type MutationEnrollLessonCurriculumArgs = {
  input: EnrollLessonCurriculumInput;
};


export type MutationFindAccountPasswordArgs = {
  input: FindAccountPasswordInput;
};


export type MutationLoginAccountArgs = {
  input: LoginAccountInput;
};


export type MutationLoginClassroomArgs = {
  input: LoginClassroomInput;
};


export type MutationMultiUploadFileArgs = {
  input: MultiUploadFileInput;
};


export type MutationResetAccountPasswordArgs = {
  input: ResetAccountPasswordInput;
};


export type MutationResetClassroomStudentTempPasswordArgs = {
  input: ResetClassroomStudentTempPasswordInput;
};


export type MutationSingleUploadFileArgs = {
  input: SingleUploadFileInput;
};


export type MutationStartClassroomLessonStudentArgs = {
  input: StartClassroomLessonStudentInput;
};


export type MutationToggleLessonBookmarkArgs = {
  input: ToggleLessonBookmarkInput;
};


export type MutationToggleLessonLikeArgs = {
  input: ToggleLessonLikeInput;
};


export type MutationToggleStatLessonBookmarkArgs = {
  input: ToggleStatLessonBookmarkInput;
};


export type MutationToggleStatLessonLikeArgs = {
  input: ToggleStatLessonLikeInput;
};


export type MutationUnenrollLessonCurriculumArgs = {
  input: UnenrollLessonCurriculumInput;
};


export type MutationUpdateAccountMemberArgs = {
  input: UpdateAccountMemberInput;
};


export type MutationUpdateAppBannerArgs = {
  input: UpdateAppBannerInput;
};


export type MutationUpdateBoardDataArgs = {
  input: UpdateBoardDataInput;
};


export type MutationUpdateBoardFaqArgs = {
  input: UpdateBoardFaqInput;
};


export type MutationUpdateBoardNoticeArgs = {
  input: UpdateBoardNoticeInput;
};


export type MutationUpdateClassroomArgs = {
  input: UpdateClassroomInput;
};


export type MutationUpdateClassroomHomeworkArgs = {
  input: UpdateClassroomHomeworkInput;
};


export type MutationUpdateClassroomNoticeArgs = {
  input: UpdateClassroomNoticeInput;
};


export type MutationUpdateClassroomStudentHomeworkArgs = {
  input: UpdateClassroomStudentHomeworkInput;
};


export type MutationUpdateClassroomStudentPasswordArgs = {
  input: UpdateClassroomStudentPasswordInput;
};


export type MutationUpdateClassroomTokenArgs = {
  input: UpdateClassroomTokenInput;
};


export type MutationUpdateLessonArgs = {
  input: UpdateLessonInput;
};


export type MutationUpdateLessonCurriculumArgs = {
  input: UpdateLessonCurriculumInput;
};


export type MutationUpdateLessonHardwareArgs = {
  input: UpdateLessonHardwareInput;
};


export type MutationUpdateLessonPlanArgs = {
  input: UpdateLessonPlanInput;
};


export type MutationUpdateLessonPlanContentArgs = {
  input: UpdateLessonPlanContentInput;
};


export type MutationUpdateLessonPlanContentsIndexArgs = {
  input: Array<UpdateLessonPlanContentsIndexInput>;
};


export type MutationUpdateLessonPlansIndexArgs = {
  input: Array<UpdateLessonPlansIndexInput>;
};


export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};


export type MutationUpdateReviewArgs = {
  input: UpdateReviewInput;
};


export type MutationUpdateReviewReplyArgs = {
  input: UpdateReviewReplyInput;
};


export type MutationUploadFileArgs = {
  input: UploadFileInput;
};

export type Node = {
  id: Scalars['ID'];
};

export enum OpenType {
  All = 'ALL',
  Close = 'CLOSE',
  Delete = 'DELETE',
  Open = 'OPEN'
}

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum OrderDirectionType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OriginApiAirPollution = {
  __typename?: 'OriginAPIAirPollution';
  components: AirPollutionComponents;
  list: Array<AirPollution>;
};

export type OriginApiWeather = {
  __typename?: 'OriginAPIWeather';
  main: WeatherMain;
  name: Scalars['String'];
  weather: Array<Weather>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasBeforePage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

export type PredictionResult = {
  __typename?: 'PredictionResult';
  durationTime: Scalars['Int'];
  tcCoefficient: Scalars['Float'];
  totalScore: Scalars['Float'];
};

export type PredictionResultWhere = {
  questionNo: Scalars['String'];
};

export type Project = Node & {
  __typename?: 'Project';
  codeType: ProjectCodeType;
  id: Scalars['ID'];
  jsonData: Scalars['String'];
  thumb: ImageInfo;
  title: Scalars['String'];
  userKey: Scalars['String'];
};

export enum ProjectCodeType {
  Entry = 'ENTRY',
  Scratch = 'SCRATCH'
}

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  edges: Array<Maybe<ProjectEdge>>;
  nodes: Array<Maybe<Project>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum ProjectConnectionField {
  Id = 'ID'
}

export type ProjectConnectionOrder = {
  field: ProjectConnectionField;
};

export type ProjectConnectionWhere = {
  filter?: InputMaybe<Scalars['String']>;
  userKey: Scalars['String'];
};

export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  cursor: Scalars['String'];
  node: Project;
};

export type ProjectNameExistWhere = {
  title: Scalars['String'];
  userKey: Scalars['String'];
};

export enum ProjectPackConnectionField {
  Id = 'ID'
}

export type ProjectWhere = {
  id: Scalars['ID'];
  userKey: Scalars['String'];
};

export type ProjectWork = Node & {
  __typename?: 'ProjectWork';
  codeType: ProjectCodeType;
  id: Scalars['ID'];
  jsonData: Scalars['String'];
  lessonContentId: Scalars['String'];
  lessonId: Scalars['String'];
  provider: Scalars['String'];
  thumb: ImageInfo;
  title: Scalars['String'];
  userId: Scalars['String'];
  userName: Scalars['String'];
};

export type ProjectWorkConnection = {
  __typename?: 'ProjectWorkConnection';
  edges: Array<Maybe<ProjectWorkEdge>>;
  nodes: Array<Maybe<ProjectWork>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum ProjectWorkConnectionField {
  Id = 'ID'
}

export type ProjectWorkConnectionOrder = {
  field: ProjectWorkConnectionField;
};

export type ProjectWorkConnectionWhere = {
  filter?: InputMaybe<Scalars['String']>;
};

export type ProjectWorkEdge = {
  __typename?: 'ProjectWorkEdge';
  cursor: Scalars['String'];
  node: ProjectWork;
};

export type ProjectWorkWhere = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  BestEvaluationResult: EvaluationResult;
  CodingStats: CodingStats;
  EvaluationResult: EvaluationResult;
  Modi: Modi;
  ModiList: Array<Maybe<Modi>>;
  PredictionResult: PredictionResult;
  Question: Question;
  QuestionConnection: QuestionConnection;
  QuestionLevelTypeAll: Array<QuestionLevelType>;
  QuestionTypeAll: Array<QuestionType>;
  accountIsDuplicateUserEmail: Scalars['Int'];
  accountIsDuplicateUserId: Scalars['Int'];
  accountMember: AccountMember;
  accountMemberConnection: AccountMemberConnection;
  accountSchoolConnection: AccountSchoolConnection;
  apiWeather: ApiWeather;
  appBanner: AppBanner;
  appBannerConnection: AppBannerConnection;
  appInit: AppInit;
  appProductGroups: Array<AppProductGroup>;
  appServiceMarketingAgreement: Scalars['String'];
  appServicePersonalAgreement: Scalars['String'];
  appServiceTerms: Scalars['String'];
  appVersion: AppVersion;
  boardCodeConnection: BoardCodeConnection;
  boardData?: Maybe<BoardData>;
  boardDataConnection: BoardDataConnection;
  boardFaq?: Maybe<BoardFaq>;
  boardFaqConnection: BoardFaqConnection;
  boardNotice?: Maybe<BoardNotice>;
  boardNoticeConnection: BoardNoticeConnection;
  classroom: Classroom;
  classroomConnection: ClassroomConnection;
  classroomHomework: ClassroomHomework;
  classroomHomeworkConnection: ClassroomHomeworkConnection;
  classroomHomeworkGroupConnection: ClassroomHomeworkGroupConnection;
  classroomNotice: ClassroomNotice;
  classroomNoticeConnection: ClassroomNoticeConnection;
  classroomStudent: ClassroomStudent;
  classroomStudentConnection: ClassroomStudentConnection;
  classroomStudentLessonDashboardConnection: ClassroomStudentLessonDashboardConnection;
  containers: Array<Container>;
  lesson: Lesson;
  lessonCategory: Array<LessonCategory>;
  lessonConnection: LessonConnection;
  lessonCurriculum: LessonCurriculum;
  lessonCurriculumConnection: LessonCurriculumConnection;
  lessonGroupConnection: LessonGroupConnection;
  lessonGroupLabels: Array<LessonGroupLabel>;
  lessonHardware: LessonHardware;
  lessonHardwareGroup: Array<LessonHardwareGroup>;
  lessonLevelLabels: Array<LessonLevelLabel>;
  lessonPlanContentConnection: LessonPlanContentConnection;
  lessonVideoConnection: LessonVideoConnection;
  project: Project;
  projectConnection: ProjectConnection;
  projectNameExist: Scalars['Boolean'];
  projectWork: ProjectWork;
  projectWorkConnection: ProjectWorkConnection;
  review: Review;
  reviewConnection: ReviewConnection;
  searchTags: Array<SearchTag>;
  startContainer: Container;
  statUserLessonConnection: StatUserLessonConnection;
  statUserSummary: StatUserSummary;
  statUserSummaryConnection: StatUserSummaryConnection;
  statUserView: Array<StatUserView>;
  terminalSessionID: Scalars['String'];
  uploadImageConnection: UploadImageConnection;
};


export type QueryBestEvaluationResultArgs = {
  where: EvaluationResultWhere;
};


export type QueryEvaluationResultArgs = {
  where: EvaluationResultWhere;
};


export type QueryModiArgs = {
  where: ModiWhere;
};


export type QueryPredictionResultArgs = {
  where: PredictionResultWhere;
};


export type QueryQuestionArgs = {
  where: QuestionWhere;
};


export type QueryQuestionConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<QuestionConnectionOrder>;
  where?: InputMaybe<QuestionConnectionWhere>;
};


export type QueryAccountIsDuplicateUserEmailArgs = {
  where: AccountIsDuplicateUserEmailWhere;
};


export type QueryAccountIsDuplicateUserIdArgs = {
  where: AccountIsDuplicateUserIdWhere;
};


export type QueryAccountMemberArgs = {
  where?: InputMaybe<AccountMemberWhere>;
};


export type QueryAccountMemberConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountMemberConnectionOrder>;
  where?: InputMaybe<AccountMemberConnectionWhere>;
};


export type QueryAccountSchoolConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  orderBy?: InputMaybe<AccountSchoolConnectionOrder>;
  where?: InputMaybe<AccountSchoolConnectionWhere>;
};


export type QueryApiWeatherArgs = {
  where: ApiWeatherWhere;
};


export type QueryAppBannerArgs = {
  where: AppBannerWhere;
};


export type QueryAppBannerConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AppBannerConnectionOrder>;
  where?: InputMaybe<AppBannerConnectionWhere>;
};


export type QueryAppInitArgs = {
  where?: InputMaybe<AppInitWhere>;
};


export type QueryAppProductGroupsArgs = {
  where?: InputMaybe<AppProductGroupsWhere>;
};


export type QueryAppVersionArgs = {
  where: AppVersionWhere;
};


export type QueryBoardCodeConnectionArgs = {
  where: BoardCodeConnectionWhere;
};


export type QueryBoardDataArgs = {
  where: BoardDataWhere;
};


export type QueryBoardDataConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  langType?: InputMaybe<LangType>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BoardDataConnectionOrder>;
  where?: InputMaybe<BoardDataConnectionWhere>;
};


export type QueryBoardFaqArgs = {
  where: BoardFaqWhere;
};


export type QueryBoardFaqConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  langType?: InputMaybe<LangType>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BoardFaqConnectionOrder>;
  where?: InputMaybe<BoardFaqConnectionWhere>;
};


export type QueryBoardNoticeArgs = {
  where: BoardNoticeWhere;
};


export type QueryBoardNoticeConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  langType?: InputMaybe<LangType>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BoardNoticeConnectionOrder>;
  where?: InputMaybe<BoardNoticeConnectionWhere>;
};


export type QueryClassroomArgs = {
  where?: InputMaybe<ClassroomWhere>;
};


export type QueryClassroomConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClassroomConnectionOrder>;
  where?: InputMaybe<ClassroomConnectionWhere>;
};


export type QueryClassroomHomeworkArgs = {
  where: ClassroomHomeworkWhere;
};


export type QueryClassroomHomeworkConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClassroomHomeworkConnectionOrder>;
  where: ClassroomHomeworkConnectionWhere;
};


export type QueryClassroomHomeworkGroupConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClassroomHomeworkGroupConnectionOrder>;
  where: ClassroomHomeworkGroupConnectionWhere;
};


export type QueryClassroomNoticeArgs = {
  where: ClassroomNoticeWhere;
};


export type QueryClassroomNoticeConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClassroomNoticeConnectionOrder>;
  where: ClassroomNoticeConnectionWhere;
};


export type QueryClassroomStudentArgs = {
  where: ClassroomStudentWhere;
};


export type QueryClassroomStudentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClassroomStudentConnectionOrder>;
  where: ClassroomStudentConnectionWhere;
};


export type QueryClassroomStudentLessonDashboardConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClassroomStudentLessonDashboardConnectionOrder>;
  where: ClassroomStudentLessonDashboardConnectionWhere;
};


export type QueryLessonArgs = {
  where: LessonWhere;
};


export type QueryLessonCategoryArgs = {
  where: LessonCategoryWhere;
};


export type QueryLessonConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LessonConnectionOrder>;
  where?: InputMaybe<LessonConnectionWhere>;
};


export type QueryLessonCurriculumArgs = {
  where: LessonCurriculumWhere;
};


export type QueryLessonCurriculumConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LessonCurriculumConnectionOrder>;
  where: LessonCurriculumConnectionWhere;
};


export type QueryLessonGroupConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LessonGroupConnectionOrder>;
  where: LessonGroupConnectionWhere;
};


export type QueryLessonHardwareArgs = {
  where: LessonHardwareWhere;
};


export type QueryLessonPlanContentConnectionArgs = {
  where: LessonPlanContentConnectionWhere;
};


export type QueryLessonVideoConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LessonVideoConnectionOrder>;
  where?: InputMaybe<LessonVideoConnectionWhere>;
};


export type QueryProjectArgs = {
  where: ProjectWhere;
};


export type QueryProjectConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectConnectionOrder>;
  where: ProjectConnectionWhere;
};


export type QueryProjectNameExistArgs = {
  where: ProjectNameExistWhere;
};


export type QueryProjectWorkArgs = {
  where: ProjectWorkWhere;
};


export type QueryProjectWorkConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectWorkConnectionOrder>;
  where: ProjectWorkConnectionWhere;
};


export type QueryReviewArgs = {
  where: ReviewWhere;
};


export type QueryReviewConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReviewConnectionOrder>;
  where?: InputMaybe<ReviewConnectionWhere>;
};


export type QuerySearchTagsArgs = {
  where: SearchTagsWhere;
};


export type QueryStartContainerArgs = {
  input: StartContainerInput;
};


export type QueryStatUserLessonConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StatUserLessonConnectionOrder>;
  where: StatUserLessonConnectionWhere;
};


export type QueryStatUserSummaryArgs = {
  where?: InputMaybe<StatUserSummaryWhere>;
};


export type QueryStatUserSummaryConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryStatUserViewArgs = {
  where: StatUserViewWhere;
};


export type QueryTerminalSessionIdArgs = {
  input: TerminalSessionIdInput;
};


export type QueryUploadImageConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UploadImageConnectionOrder>;
  where?: InputMaybe<UploadImageConnectionWhere>;
};

export type Question = {
  __typename?: 'Question';
  answerCode: Scalars['String'];
  answerPercent: Scalars['Int'];
  args: Array<Arg>;
  avgScore: Scalars['Int'];
  createdAt: Scalars['String'];
  deletedAt: Scalars['String'];
  examineeCnt: Scalars['Int'];
  exampleTestcases: Array<QuestionTestcase>;
  id: Scalars['ID'];
  infos: Array<QuestionInfo>;
  initCode: Scalars['String'];
  isPass?: Maybe<Scalars['Boolean']>;
  levelType: QuestionLevelType;
  limitTime: Scalars['String'];
  openType: QuestionOpenType;
  ownerId: Scalars['String'];
  returnType: Scalars['String'];
  testcases: Array<QuestionTestcase>;
  title: Scalars['String'];
  types: Array<QuestionType>;
  updatedAt: Scalars['String'];
};

export type QuestionConnection = {
  __typename?: 'QuestionConnection';
  nodes: Array<Maybe<Question>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum QuestionConnectionField {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

export type QuestionConnectionOrder = {
  direction?: InputMaybe<OrderDirection>;
  field: QuestionConnectionField;
};

export type QuestionConnectionWhere = {
  levelType?: InputMaybe<Array<QuestionLevelType>>;
  statusType?: InputMaybe<Array<QuestionStatusType>>;
  type?: InputMaybe<Array<QuestionType>>;
};

export type QuestionInfo = {
  __typename?: 'QuestionInfo';
  description: Scalars['String'];
  title: Scalars['String'];
};

export type QuestionInfoInput = {
  description: Scalars['String'];
  title: Scalars['String'];
};

export enum QuestionLevelType {
  Level1 = 'LEVEL1',
  Level2 = 'LEVEL2',
  Level3 = 'LEVEL3',
  Level4 = 'LEVEL4',
  Level5 = 'LEVEL5'
}

export type QuestionLevelTypes = {
  __typename?: 'QuestionLevelTypes';
  types: Array<Scalars['String']>;
};

export enum QuestionOpenType {
  Close = 'CLOSE',
  Open = 'OPEN'
}

export enum QuestionParamType {
  Boolean = 'BOOLEAN',
  Int = 'INT',
  Intarray = 'INTARRAY',
  String = 'STRING'
}

export enum QuestionStatusType {
  Fail = 'FAIL',
  Pass = 'PASS',
  Ready = 'READY'
}

export type QuestionTestcase = {
  __typename?: 'QuestionTestcase';
  id: Scalars['ID'];
  input: Array<QuestionTestcaseParam>;
  output: QuestionTestcaseParam;
  score?: Maybe<Scalars['Int']>;
};

export type QuestionTestcaseInput = {
  input: Array<QuestionTestcaseParamInput>;
  output: QuestionTestcaseParamInput;
  score?: InputMaybe<Scalars['Int']>;
};

export type QuestionTestcaseParam = {
  __typename?: 'QuestionTestcaseParam';
  paramValue: QuestionTestcaseParamValue;
  type: QuestionParamType;
};

export type QuestionTestcaseParamInput = {
  type: QuestionParamType;
  value: Scalars['String'];
};

export type QuestionTestcaseParamValue = QuestionTestcaseParamValueBoolean | QuestionTestcaseParamValueInt | QuestionTestcaseParamValueIntArray | QuestionTestcaseParamValueString;

export type QuestionTestcaseParamValueBoolean = {
  __typename?: 'QuestionTestcaseParamValueBoolean';
  valueBoolean: Scalars['Boolean'];
};

export type QuestionTestcaseParamValueInt = {
  __typename?: 'QuestionTestcaseParamValueInt';
  valueInt: Scalars['Int'];
};

export type QuestionTestcaseParamValueIntArray = {
  __typename?: 'QuestionTestcaseParamValueIntArray';
  valueIntArray: Array<Scalars['Int']>;
};

export type QuestionTestcaseParamValueString = {
  __typename?: 'QuestionTestcaseParamValueString';
  valueString: Scalars['String'];
};

export enum QuestionType {
  Array = 'ARRAY',
  Graph = 'GRAPH',
  Hash = 'HASH',
  Heap = 'HEAP',
  Mathematics = 'MATHEMATICS',
  Queue = 'QUEUE',
  Sort = 'SORT',
  Stack = 'STACK',
  String = 'STRING',
  Tree = 'TREE'
}

export type QuestionWhere = {
  ID: Scalars['String'];
};

export type Reply = Node & {
  __typename?: 'Reply';
  comment: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  ownerId: Scalars['String'];
  ownerName: Scalars['String'];
  reviewId: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type ResetAccountPasswordInput = {
  authCode: Scalars['String'];
  password: Scalars['String'];
};

export type ResetClassroomStudentTempPasswordInput = {
  userId: Scalars['String'];
};

export type Review = Node & {
  __typename?: 'Review';
  comment: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  ownerId: Scalars['String'];
  ownerName: Scalars['String'];
  replies: Array<Maybe<Reply>>;
  serviceId: Scalars['String'];
  serviceType: ReviewServiceType;
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type ReviewConnection = {
  __typename?: 'ReviewConnection';
  edges: Array<Maybe<ReviewEdge>>;
  nodes: Array<Maybe<Review>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum ReviewConnectionField {
  Id = 'ID'
}

export type ReviewConnectionOrder = {
  field: ReviewConnectionField;
};

export type ReviewConnectionWhere = {
  filter?: InputMaybe<Scalars['String']>;
  serviceId?: InputMaybe<Scalars['String']>;
  serviceType?: InputMaybe<ReviewServiceType>;
};

export type ReviewEdge = {
  __typename?: 'ReviewEdge';
  cursor: Scalars['String'];
  node: Review;
};

export type ReviewQna = Node & {
  __typename?: 'ReviewQna';
  comment: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  replies: Array<Maybe<Reply>>;
  serviceId: Scalars['String'];
  serviceType: ReviewServiceType;
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type ReviewQnaConnection = {
  __typename?: 'ReviewQnaConnection';
  edges: Array<Maybe<ReviewQnaEdge>>;
  nodes: Array<Maybe<ReviewQna>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum ReviewQnaConnectionField {
  Id = 'ID'
}

export type ReviewQnaConnectionOrder = {
  field: ReviewQnaConnectionField;
};

export type ReviewQnaConnectionWhere = {
  filter?: InputMaybe<Scalars['String']>;
  serviceId?: InputMaybe<Scalars['String']>;
  serviceType?: InputMaybe<ReviewQnaServiceType>;
};

export type ReviewQnaEdge = {
  __typename?: 'ReviewQnaEdge';
  cursor: Scalars['String'];
  node: ReviewQna;
};

export type ReviewQnaReply = Node & {
  __typename?: 'ReviewQnaReply';
  comment: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  reviewQnaId: Scalars['String'];
  updatedAt: Scalars['String'];
};

export enum ReviewQnaServiceType {
  Curriculum = 'CURRICULUM',
  Lesson = 'LESSON'
}

export type ReviewQnaWhere = {
  id: Scalars['ID'];
};

export enum ReviewServiceType {
  Curriculum = 'CURRICULUM',
  Lesson = 'LESSON'
}

export type ReviewWhere = {
  id: Scalars['ID'];
};

export enum SearchConnectionDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum SearchConnectionField {
  CreatedAt = 'CREATED_AT',
  Popularity = 'POPULARITY',
  Rating = 'RATING'
}

export type SearchConnectionOrder = {
  direction: SearchConnectionDirection;
  field: SearchConnectionField;
};

export type SearchConnectionWhere = {
  filter?: InputMaybe<Scalars['String']>;
};

export enum SearchIndexType {
  Lesson = 'LESSON',
  LessonBook = 'LESSON_BOOK',
  LessonCurriculum = 'LESSON_CURRICULUM'
}

export type SearchTag = {
  __typename?: 'SearchTag';
  count: Scalars['Int'];
  name: Scalars['String'];
};

export type SearchTagsWhere = {
  indexTypes: Array<SearchIndexType>;
};

export type SingleUploadFileInput = {
  file: Scalars['Upload'];
  functionType: UploadFileType;
  id?: InputMaybe<Scalars['String']>;
};

export enum SoftwareType {
  Jupyter = 'JUPYTER',
  Vscode = 'VSCODE'
}

export type Stack = {
  __typename?: 'Stack';
  cpu: Scalars['String'];
  language: LanguageType;
  memory: Scalars['String'];
  software: SoftwareType;
  storageSize: Scalars['String'];
};

export type StackInput = {
  cpu: Scalars['String'];
  language: LanguageType;
  memory: Scalars['String'];
  software: SoftwareType;
  storageSize: Scalars['String'];
};

export type StartClassroomLessonStudentInput = {
  classroomId: Scalars['String'];
  lessonId: Scalars['String'];
};

export type StartContainerInput = {
  AccessLinkWorkspace: Scalars['String'];
  Name: Scalars['String'];
  Namespace: Scalars['String'];
};

export type StartEvaluationInput = {
  questionNo: Scalars['String'];
};

export enum StatBookmarkServiceType {
  Curriculum = 'CURRICULUM',
  Lesson = 'LESSON'
}

export type StatLessnContentSubscribeWhere = {
  token: Scalars['String'];
};

export type StatLessonContent = {
  __typename?: 'StatLessonContent';
  UserHashKey: Scalars['String'];
  doneDate: Scalars['String'];
  isDone: Scalars['Boolean'];
  lessonContentId: Scalars['String'];
  lessonId: Scalars['String'];
};

export enum StatLikeServiceType {
  Curriculum = 'CURRICULUM',
  Lesson = 'LESSON'
}

export enum StatQuestionType {
  Coding = 'CODING',
  Normal = 'NORMAL',
  Pronunciation = 'PRONUNCIATION',
  Sentence = 'SENTENCE'
}

export type StatRate = {
  __typename?: 'StatRate';
  accuracy: Scalars['Int'];
  progress: Scalars['Int'];
  success: Scalars['Int'];
};

export type StatUserCapacity = {
  __typename?: 'StatUserCapacity';
  date: Scalars['String'];
  value: Scalars['Int'];
};

export type StatUserCapacityInfo = {
  __typename?: 'StatUserCapacityInfo';
  describe: Scalars['String'];
  mean: Scalars['Int'];
};

export type StatUserCapacityMean = {
  __typename?: 'StatUserCapacityMean';
  changingSituation: StatUserCapacityInfo;
  concentration: StatUserCapacityInfo;
  language: StatUserCapacityInfo;
  memory: StatUserCapacityInfo;
  thinkingSkill: StatUserCapacityInfo;
};

export type StatUserCapacityWeekly = {
  __typename?: 'StatUserCapacityWeekly';
  changingSituations: Array<StatUserCapacity>;
  concentrations: Array<StatUserCapacity>;
  languages: Array<StatUserCapacity>;
  memories: Array<StatUserCapacity>;
  thinkingSkills: Array<StatUserCapacity>;
};

export type StatUserLessonConnection = {
  __typename?: 'StatUserLessonConnection';
  edges: Array<Maybe<StatUserLessonEdge>>;
  nodes: Array<Scalars['String']>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum StatUserLessonConnectionField {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  Popularity = 'POPULARITY'
}

export type StatUserLessonConnectionOrder = {
  direction?: InputMaybe<OrderDirectionType>;
  field: StatUserLessonConnectionField;
};

export type StatUserLessonConnectionWhere = {
  provider?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  userId: Scalars['String'];
};

export type StatUserLessonCount = {
  __typename?: 'StatUserLessonCount';
  lessonDoneCount: Scalars['Int'];
  lessonOwnerCount: Scalars['Int'];
  lessonOwnerStudentCount: Scalars['Int'];
  lessonOwnerStudentMeanCount: Scalars['Int'];
  lessonRegisterCount: Scalars['Int'];
};

export type StatUserLessonEdge = {
  __typename?: 'StatUserLessonEdge';
  cursor: Scalars['String'];
  node: Scalars['String'];
};

export enum StatUserProviderType {
  Classroom = 'CLASSROOM',
  Teacher = 'TEACHER'
}

export type StatUserStudyTime = {
  __typename?: 'StatUserStudyTime';
  coding: Scalars['String'];
  days: Scalars['String'];
  english: Scalars['String'];
  game: Scalars['String'];
  normal: Scalars['String'];
};

export type StatUserSummary = Node & {
  __typename?: 'StatUserSummary';
  capacityMean: StatUserCapacityMean;
  capacityWeekly: StatUserCapacityWeekly;
  id: Scalars['ID'];
  lessonCount: StatUserLessonCount;
  provider: Scalars['String'];
  rate: StatRate;
  studyTime: StatUserStudyTime;
  userId: Scalars['String'];
  userName: Scalars['String'];
};

export type StatUserSummaryConnection = {
  __typename?: 'StatUserSummaryConnection';
  edges: Array<Maybe<StatUserSummaryEdge>>;
  nodes: Array<StatUserSummary>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type StatUserSummaryConnectionOrder = {
  direction?: InputMaybe<OrderDirectionType>;
  field: StatUserLessonConnectionField;
};

export type StatUserSummaryEdge = {
  __typename?: 'StatUserSummaryEdge';
  cursor: Scalars['String'];
  node: StatUserSummary;
};

export type StatUserSummaryWhere = {
  userId?: InputMaybe<Scalars['String']>;
  userProviderType?: InputMaybe<StatUserProviderType>;
};

export type StatUserView = {
  __typename?: 'StatUserView';
  curriculumID: Scalars['String'];
  lessonId: Scalars['String'];
  user: Scalars['String'];
};

export type StatUserViewWhere = {
  lessonIds?: InputMaybe<Array<Scalars['String']>>;
  userId: Scalars['String'];
};

export enum StatusType {
  Off = 'OFF',
  On = 'ON'
}

export type SubmitCodeInput = {
  code: Scalars['String'];
  durationTime?: InputMaybe<Scalars['Int']>;
  evaluationNo: Scalars['String'];
  language: LanguageType;
  questionNo: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  statLessnContentSubscribe: StatLessonContent;
};


export type SubscriptionStatLessnContentSubscribeArgs = {
  where: StatLessnContentSubscribeWhere;
};

export type TerminalSessionIdInput = {
  ContainerName: Scalars['String'];
  Namespace: Scalars['String'];
  PodName: Scalars['String'];
};

export type TestcaseResult = {
  __typename?: 'TestcaseResult';
  isPass: Scalars['Boolean'];
  responseTime: Scalars['String'];
  score: Scalars['Int'];
  tcNo: Scalars['String'];
};

export type TestcaseWhere = {
  questionNo: Scalars['String'];
};

export type ToggleLessonBookmarkInput = {
  serviceId: Scalars['String'];
  serviceType: BookmarkServiceType;
};

export type ToggleLessonLikeInput = {
  serviceId: Scalars['String'];
  serviceType: LikeServiceType;
};

export type ToggleStatLessonBookmarkInput = {
  serviceId: Scalars['String'];
  serviceType: StatBookmarkServiceType;
};

export type ToggleStatLessonLikeInput = {
  serviceId: Scalars['String'];
  serviceType: StatLikeServiceType;
};

export enum TrueFalseType {
  F = 'F',
  T = 'T'
}

export type UnenrollLessonCurriculumInput = {
  curriculumId: Scalars['String'];
};

export type UpdateAccountMemberInput = {
  gender: AccountGenderType;
  password: Scalars['String'];
  userEmail: Scalars['String'];
  userName: Scalars['String'];
};

export type UpdateAppBannerInput = {
  id: Scalars['ID'];
  idx?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<ImageInfoInput>;
  openType?: InputMaybe<OpenType>;
  subTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<AppBannerType>;
};

export type UpdateBoardDataInput = {
  dataByLanguages: Array<BoardDataByLanguageInput>;
  id: Scalars['ID'];
  isView?: InputMaybe<Scalars['Boolean']>;
  serviceType?: InputMaybe<BoardServiceType>;
};

export type UpdateBoardFaqInput = {
  faqCode?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  isView?: InputMaybe<Scalars['Boolean']>;
  languages?: InputMaybe<Array<BoardFaqLanguageInput>>;
  serviceType?: InputMaybe<BoardServiceType>;
};

export type UpdateBoardIsTopInput = {
  id: Scalars['ID'];
};

export type UpdateBoardIsViewInput = {
  id: Scalars['ID'];
};

export type UpdateBoardNoticeInput = {
  contentId?: InputMaybe<Scalars['String']>;
  dataByLanguages: Array<BoardDataByLanguageInput>;
  id: Scalars['ID'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isTop?: InputMaybe<Scalars['Boolean']>;
  isView?: InputMaybe<Scalars['Boolean']>;
  serviceType?: InputMaybe<BoardServiceType>;
};

export type UpdateClassroomHomeworkInput = {
  classroomId: Scalars['String'];
  content?: InputMaybe<Scalars['String']>;
  expireDate?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lessonId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateClassroomInput = {
  gradeType?: InputMaybe<ClassroomGradeType>;
  id: Scalars['ID'];
  idx?: InputMaybe<Scalars['Int']>;
  mainImg?: InputMaybe<ImageInfoInput>;
  openType?: InputMaybe<ClassroomOpenType>;
  summary?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateClassroomNoticeInput = {
  classroomId: Scalars['String'];
  content?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateClassroomStudentHomeworkInput = {
  content?: InputMaybe<Scalars['String']>;
  fileBase64?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type UpdateClassroomStudentPasswordInput = {
  newPassword: Scalars['String'];
  oldPassword?: InputMaybe<Scalars['String']>;
};

export type UpdateClassroomTokenInput = {
  refreshToken: Scalars['String'];
};

export type UpdateLessonCurriculumInput = {
  bgImg?: InputMaybe<ImageInfoInput>;
  color?: InputMaybe<Scalars['String']>;
  groupType?: InputMaybe<LessonGroupType>;
  id: Scalars['ID'];
  idx?: InputMaybe<Scalars['Int']>;
  label?: InputMaybe<Scalars['String']>;
  languages?: InputMaybe<Array<LessonCurriculumLanguageInput>>;
  levelType?: InputMaybe<LessonLevelType>;
  mainImgs?: InputMaybe<Array<InputMaybe<ImageInfoInput>>>;
  openType?: InputMaybe<OpenType>;
  serviceType?: InputMaybe<LessonServiceType>;
  summary?: InputMaybe<LessonSummaryInput>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  textColor?: InputMaybe<Scalars['String']>;
  viewType?: InputMaybe<LessonViewType>;
};

export type UpdateLessonCurriculumRelateInput = {
  curriculumId: Scalars['String'];
  idx?: InputMaybe<Scalars['Int']>;
  lessonId: Scalars['String'];
  summary?: InputMaybe<Scalars['String']>;
};

export type UpdateLessonHardwareInput = {
  hardwareType?: InputMaybe<LessonHardwareType>;
  id: Scalars['ID'];
  mainImg?: InputMaybe<ImageInfoInput>;
  subTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateLessonInput = {
  answerCode?: InputMaybe<Scalars['String']>;
  bgImg?: InputMaybe<ImageInfoInput>;
  classTime?: InputMaybe<Scalars['Int']>;
  color?: InputMaybe<Scalars['String']>;
  creationType?: InputMaybe<LessonCodingCreationType>;
  epubUrl?: InputMaybe<Scalars['String']>;
  groupType?: InputMaybe<LessonGroupType>;
  id: Scalars['ID'];
  idx?: InputMaybe<Scalars['Int']>;
  languages?: InputMaybe<Array<LessonLanguageInput>>;
  levelType?: InputMaybe<LessonLevelType>;
  lockType?: InputMaybe<TrueFalseType>;
  mainImgs?: InputMaybe<Array<InputMaybe<ImageInfoInput>>>;
  openType?: InputMaybe<OpenType>;
  serviceType?: InputMaybe<LessonServiceType>;
  summary?: InputMaybe<LessonSummaryInput>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  textColor?: InputMaybe<Scalars['String']>;
  videoType?: InputMaybe<Scalars['String']>;
  videoURL?: InputMaybe<Scalars['String']>;
};

export type UpdateLessonPlanContentInput = {
  id: Scalars['ID'];
  lessonId: Scalars['String'];
  lessonPlanId: Scalars['String'];
  templates?: InputMaybe<Array<LessonPlanContentTemplateInput>>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<LessonPlanContentType>;
  viewType?: InputMaybe<LessonPlanContentViewType>;
};

export type UpdateLessonPlanContentsIndexInput = {
  id: Scalars['ID'];
  idx: Scalars['Int'];
  lessonId: Scalars['String'];
  lessonPlanId: Scalars['String'];
};

export type UpdateLessonPlanInput = {
  contents?: InputMaybe<Array<LessonPlanContentInput>>;
  id: Scalars['ID'];
  idx?: InputMaybe<Scalars['Int']>;
  lessonId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  viewType?: InputMaybe<LessonPlanViewType>;
};

export type UpdateLessonPlansIndexInput = {
  id: Scalars['ID'];
  idx: Scalars['Int'];
  lessonId: Scalars['String'];
};

export type UpdateModiCmdResultInput = {
  id: Scalars['ID'];
  modiNo: Scalars['Int'];
  requestCanProtocolCodeNo?: InputMaybe<Scalars['Int']>;
  requestPacket?: InputMaybe<Scalars['String']>;
  responseCanProtocolCodeNo?: InputMaybe<Scalars['Int']>;
  responsePacket?: InputMaybe<Scalars['String']>;
};

export type UpdateModiInput = {
  location?: InputMaybe<GeoLocationInput>;
  swVersion?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ModiModuleType>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type UpdateProjectInput = {
  codeType?: InputMaybe<ProjectCodeType>;
  id: Scalars['ID'];
  jsonData?: InputMaybe<Scalars['String']>;
  thumb?: InputMaybe<ImageInfoInput>;
  title?: InputMaybe<Scalars['String']>;
  userKey: Scalars['String'];
};

export type UpdateProjectWorkInput = {
  codeType?: InputMaybe<ProjectCodeType>;
  id: Scalars['ID'];
  jsonData?: InputMaybe<Scalars['String']>;
  thumb?: InputMaybe<ImageInfoInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateReviewInput = {
  comment: Scalars['String'];
  id: Scalars['String'];
  title: Scalars['String'];
};

export type UpdateReviewQnaInput = {
  comment: Scalars['String'];
  title: Scalars['String'];
};

export type UpdateReviewReplyInput = {
  comment: Scalars['String'];
  id: Scalars['String'];
};

export type UploadFileInput = {
  file: Scalars['String'];
  functionType: UploadFileType;
  id?: InputMaybe<Scalars['String']>;
};

export enum UploadFileType {
  Data = 'DATA',
  Notice = 'NOTICE'
}

export type UploadImage = Node & {
  __typename?: 'UploadImage';
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  idx: Scalars['Int'];
  image: ImageInfo;
  imageKey: Scalars['String'];
  serviceId: Scalars['String'];
  serviceType: UploadImageServiceType;
  updatedAt: Scalars['String'];
};

export type UploadImageConnection = {
  __typename?: 'UploadImageConnection';
  edges: Array<Maybe<UploadImageEdge>>;
  nodes: Array<Maybe<UploadImage>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum UploadImageConnectionField {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  Popularity = 'POPULARITY'
}

export type UploadImageConnectionOrder = {
  direction?: InputMaybe<OrderDirectionType>;
  field: UploadImageConnectionField;
};

export type UploadImageConnectionWhere = {
  serviceIds?: InputMaybe<Array<Scalars['String']>>;
  serviceType?: InputMaybe<UploadImageServiceType>;
};

export type UploadImageEdge = {
  __typename?: 'UploadImageEdge';
  cursor: Scalars['String'];
  node: UploadImage;
};

export enum UploadImageServiceType {
  Classroom = 'CLASSROOM',
  CodingEntry = 'CODING_ENTRY',
  CodingScratch = 'CODING_SCRATCH',
  Curriculum = 'CURRICULUM',
  Hardware = 'HARDWARE',
  Lesson = 'LESSON',
  LessonContent = 'LESSON_CONTENT',
  LessonPlan = 'LESSON_PLAN',
  Review = 'REVIEW'
}

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type UserActivity = {
  __typename?: 'UserActivity';
  cBookmark: Scalars['Int'];
  cLessonMember: Scalars['Int'];
  cLike: Scalars['Int'];
  cReview: Scalars['Int'];
  cView: Scalars['Int'];
  doneDate: Scalars['String'];
  isBookmark: Scalars['Boolean'];
  isEnroll: Scalars['Boolean'];
  isLike: Scalars['Boolean'];
  progress: LessonProgress;
};

export type VideoDetail = {
  __typename?: 'VideoDetail';
  durationInMs: Scalars['Int'];
  heightInPx: Scalars['Int'];
  url: Scalars['String'];
  videoType: LessonVideoGroupType;
  widthInPx: Scalars['Int'];
};

export type VideoInfo = {
  __typename?: 'VideoInfo';
  status: MediaProgressStatus;
  thumbnails: Array<ImageInfo>;
  videoDetails: Array<VideoDetail>;
};

export enum VideoServiceType {
  Book = 'BOOK',
  Curriculum = 'CURRICULUM',
  Lesson = 'LESSON',
  Plan = 'PLAN',
  Template = 'TEMPLATE'
}

export type Weather = {
  __typename?: 'Weather';
  description: Scalars['String'];
  id: Scalars['Int'];
  main: Scalars['String'];
};

export type WeatherMain = {
  __typename?: 'WeatherMain';
  feels_like: Scalars['Float'];
  humidity: Scalars['Float'];
  pressure: Scalars['Float'];
  temp: Scalars['Float'];
  temp_max: Scalars['Float'];
  temp_min: Scalars['Float'];
};

export type CreateLessonAllIndexInput = {
  indexType: LessonIndexType;
};
