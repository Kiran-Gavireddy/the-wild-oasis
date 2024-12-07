import supabase, { supabaseUrl } from "./supabase";
export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  console.log();
  const hasImagePath = newCabin?.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()} - ${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin?.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // https://vaxuvkamdfhzuiozpdhy.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  //1.Create/edit cabin
  let query = supabase.from("cabins");

  //A.Create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  //B. Edit
  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  // Upload image
  if (hasImagePath) return data;
  const { error: storgeError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //deleting cabin if there was an error uploading image
  if (storgeError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storgeError);
    throw new Error(
      "Cabin image could not be uloaded and cabin was not created"
    );
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}
