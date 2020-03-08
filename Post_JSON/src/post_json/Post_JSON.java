package post_json;

import java.io.BufferedInputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Map;
import org.apache.commons.io.IOUtils;
import org.json.JSONObject;

public class Post_JSON {

    public static void main(String[] args) {
        Post_JSON.Post_JSON("http://localhost:80/SegInfo_Root/blogefindbycriteria.php", "{ \"criteria\" : \"\"}");
    }

    public static void Post_JSON(String urlString, String jsonString) {
        String query_url = urlString;
        String json = jsonString;
        try {
            URL url = new URL(query_url);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setConnectTimeout(5000);
            conn.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
            conn.setDoOutput(true);
            conn.setDoInput(true);
            conn.setRequestMethod("POST");
            OutputStream os = conn.getOutputStream();
            os.write(json.getBytes("UTF-8"));
            os.close();
            // read the response
            InputStream in = new BufferedInputStream(conn.getInputStream());
            String result = IOUtils.toString(in, "UTF-8");
            System.out.println("Normal: " + result + " - " + result.getClass().getName());
            JSONObject myResponse = new JSONObject(result);
            System.out.println("JSONObject: " + myResponse + " - " + myResponse.getClass().getName());

            System.out.println("\nAccesando la wea");
            //JSONObject responseJSON = myResponse.getJSONObject("response");
            //System.out.println("-" + myResponse.get() + "-");            
            Map<String, Object> objectMap = myResponse.toMap();
            objectMap.forEach((key, value) -> {
                JSONObject myResponse2 = myResponse.getJSONObject(key);
                Map<String, Object> objectMap2 = myResponse2.toMap();
                objectMap2.forEach((key2, value2) -> {
                    if(key2.equals("id")) System.out.println(value2);
                    if(key2.equals("user_email")) System.out.println(value2);
                    if(key2.equals("entry_value")) System.out.println(value2);
                    if(key2.equals("registration_date")) System.out.println(value2);
                });
                //agregas tu objeto a tu lista
            });

            //System.out.println("\nAccesando a otraClave");
            //System.out.println(myResponse.get("otraClave"));
            in.close();
            conn.disconnect();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
