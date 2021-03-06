export const DependencyIds = {
  urlRepository: Symbol.for('urlRepository'),
  urlMapper: Symbol.for('urlMapper'),
  userMapper: Symbol.for('userMapper'),
  otpMapper: Symbol.for('otpMapper'),
  analyticsLoggerService: Symbol.for('analyticsLoggerService'),
  cookieReducer: Symbol.for('cookieReducer'),
  userRepository: Symbol.for('userRepository'),
  otpRepository: Symbol.for('otpRepository'),
  mailer: Symbol.for('mailer'),
  cryptography: Symbol.for('cryptography'),
  s3: Symbol.for('s3'),
  s3Bucket: Symbol.for('s3Bucket'),
  s3Client: Symbol.for('s3Client'),
  fileURLPrefix: Symbol.for('fileURLPrefix'),
  redirectService: Symbol.for('redirectService'),
  crawlerCheckService: Symbol.for('crawlerCheckService'),
  redirectController: Symbol.for('redirectController'),
  statisticsRepository: Symbol.for('statisticsRepository'),
  statisticsService: Symbol.for('repositoryService'),
  statisticsController: Symbol.for('statisticsController'),
  sentryController: Symbol.for('sentryController'),
  linksController: Symbol.for('linksController'),
  authService: Symbol.for('authService'),
  loginController: Symbol.for('loginController'),
  logoutController: Symbol.for('logoutController'),
  urlManagementService: Symbol.for('urlManagementService'),
  userController: Symbol.for('userController'),
  qrCodeService: Symbol.for('qrCodeService'),
  urlSearchService: Symbol.for('urlSearchService'),
  searchController: Symbol.for('searchController'),
  linkStatisticsController: Symbol.for('linkStatisticsController'),
  linkStatisticsService: Symbol.for('linkStatisticsService'),
  linkStatisticsRepository: Symbol.for('linkStatisticsRepository'),
  deviceCheckService: Symbol.for('deviceCheckService'),
}

export const ERROR_404_PATH = '404.error.ejs'
