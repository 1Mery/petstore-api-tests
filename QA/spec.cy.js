describe('Petstore API Tests', () => {

  it('GET - Pet getir', () => {
    cy.request('GET', 'https://petstore.swagger.io/v2/pet/1').then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('POST - Yeni pet ekle', () => {
    cy.request('POST', 'https://petstore.swagger.io/v2/pet', {
      id: 98765,
      name: 'CypressPet',
      status: 'available'
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('PUT - Pet güncelle', () => {
    cy.request('PUT', 'https://petstore.swagger.io/v2/pet', {
      id: 98765,
      name: 'UpdatedPet',
      status: 'sold'
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('DELETE - Pet sil', () => {
    cy.request('DELETE', 'https://petstore.swagger.io/v2/pet/98765').then((response) => {
      expect(response.status).to.eq(200);
    });
  });

});
