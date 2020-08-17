export default async (req: Request, res: Response) => {
  res.json({
    androidCurrentVersion: '0.0.1',
    androidMinVersion: '0.0.1',
    iosCurrentVersion: '0.0.1',
    iosMinVersion: '0.0.1',
    playStoreLink: 'https://',
    appStoreLink: 'https://',
    maintenanceMode: true,
    maintenanceModeText: 'mmmmm',
  });
};
