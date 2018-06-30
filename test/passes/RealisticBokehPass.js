import test from "ava";
import { RealisticBokehPass } from "../../build/postprocessing.js";

test("can be created and destroyed", t => {

	const object = new RealisticBokehPass();
	object.dispose();

	t.truthy(object);

});
