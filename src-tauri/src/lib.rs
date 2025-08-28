#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
.plugin(tauri_plugin_path::init())
.plugin(tauri_plugin_fs::init())
        // logging plugin only in dev mode
        .plugin({
            if cfg!(debug_assertions) {
                tauri_plugin_log::Builder::default()
                    .level(log::LevelFilter::Info)
                    .build()
            } else {
                tauri_plugin_log::Builder::default()
                    .level(log::LevelFilter::Error)
                    .build()
            }
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
