export default async (req: Request, res: Response) => {
  res.json({
    androidCurrentVersion: '1.0.0',
    androidMinVersion: '1.0.0',
    iosCurrentVersion: '1.0.0',
    iosMinVersion: '1.0.0',
    playStoreLink: 'https://',
    appStoreLink: 'https://',
    maintenanceMode: false,
  });
};
