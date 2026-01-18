upload.fields([
  { name: 'profilePic', maxCount: 1 },
  { name: 'documents', maxCount: 2 }
])
    router.post('/save', upload.single('image'), saveEmployee)  