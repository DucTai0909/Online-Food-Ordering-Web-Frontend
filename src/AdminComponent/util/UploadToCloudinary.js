const upload_preset = "dtfood"
const cloud_name = "datttinbn"
const api_url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`
export const UploadImageToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", upload_preset);
    data.append("cloud_name", cloud_name);

    const res = await fetch(api_url, {
        method: "POST",
        body: data
    });

    const fileData = await res.json();
    return fileData.url;
}