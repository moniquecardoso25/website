migrate(
  (app) => {
    const collection = new Collection({
      name: 'contact_messages',
      type: 'base',
      listRule: null,
      viewRule: null,
      createRule: '',
      updateRule: null,
      deleteRule: null,
      fields: [
        { name: 'name', type: 'text', required: true, min: 2, max: 200 },
        { name: 'email', type: 'text', required: true, min: 5, max: 200 },
        { name: 'message', type: 'text', required: true, min: 5, max: 5000 },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
      indexes: ['CREATE INDEX idx_contact_messages_created ON contact_messages (created DESC)'],
    })
    app.save(collection)
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('contact_messages')
    app.delete(collection)
  },
)
