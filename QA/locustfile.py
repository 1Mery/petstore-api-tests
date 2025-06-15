from locust import HttpUser, task, between
import random

class PetstoreUser(HttpUser):
    wait_time = between(1, 3)
    pet_id = random.randint(100000, 999999)

    @task
    def get_pet_by_status(self):
        self.client.get("/v2/pet/findByStatus?status=available")

    @task
    def add_pet(self):
        self.client.post("/v2/pet", json={
            "id": self.pet_id,
            "name": "TestPet",
            "photoUrls": [],
            "status": "available"
        })

    @task
    def update_pet(self):
        self.client.put("/v2/pet", json={
            "id": self.pet_id,
            "name": "UpdatedPet",
            "photoUrls": [],
            "status": "sold"
        })

    @task
    def delete_pet(self):
        self.client.delete(f"/v2/pet/{self.pet_id}")
