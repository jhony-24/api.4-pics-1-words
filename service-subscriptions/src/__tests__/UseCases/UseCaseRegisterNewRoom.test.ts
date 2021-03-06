import UseCaseRegisterNewRoom from "../../app/UseCases/UseCaseRegisterNewRoom";

describe("Use cases to register a new room", () => {

  test("should register a new room", async () => {
    const useCaseRegisterNewRoom = new UseCaseRegisterNewRoom({
      registerRoom: async (value) => value,
    });
    const testRegisterNewRoom = await useCaseRegisterNewRoom.registerRoom();
    expect(testRegisterNewRoom).toMatch(/room/);
    expect(testRegisterNewRoom).not.toBe("");
  });

});
